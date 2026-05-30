#!/usr/bin/env bash
set -euo pipefail

REPO_SLUG="${REPO_SLUG:-ec92009/Diez-42}"
SITE_HOST="${SITE_HOST:-diez42.org}"
AUTOMATION_ID="${AUTOMATION_ID:-monitor-diez-42-https-certificate}"
AUTOMATION_ROOT="${AUTOMATION_ROOT:-${CODEX_HOME:-$HOME/.codex}/automations/$AUTOMATION_ID}"
MEMORY_FILE="${MEMORY_FILE:-$AUTOMATION_ROOT/memory.md}"
STATE_FILE="${STATE_FILE:-$AUTOMATION_ROOT/state.env}"
NOTIFY_CMD="${NOTIFY_CMD:-/Users/ecohen/Dev/Codexmes/Web/scripts/notify.py}"
NOTIFY_TITLE="${NOTIFY_TITLE:-Diez-42 HTTPS monitor}"
READY_TEMPLATE='Good news: GitHub has finished issuing the SSL certificate for diez42.org, and HTTPS is now enabled. The site should no longer show as insecure. Please use https://diez42.org/ going forward.'
PENDING_TEMPLATE='Quick update: the site is live and DNS is correct, but GitHub is still provisioning the SSL certificate for diez42.org. Until that finishes, some browsers may show the site as insecure. We are monitoring it and will enable HTTPS as soon as GitHub allows it.'

mkdir -p "$AUTOMATION_ROOT"

retry_command() {
  local attempts="$1"
  local delay="$2"
  shift 2

  local attempt=1
  while true; do
    if "$@"; then
      return 0
    fi

    if (( attempt >= attempts )); then
      return 1
    fi

    sleep "$delay"
    attempt=$((attempt + 1))
  done
}

capture_command() {
  local __resultvar="$1"
  shift

  local output
  if ! output="$("$@" 2>&1)"; then
    printf -v "$__resultvar" '%s' "$output"
    return 1
  fi

  printf -v "$__resultvar" '%s' "$output"
}

prev_status=""
prev_blocker=""
prev_http_status=""
prev_https_valid=""
prev_https_enforced=""
first_run="true"
if [[ -f "$STATE_FILE" ]]; then
  first_run="false"
  # shellcheck disable=SC1090
  source "$STATE_FILE"
  prev_status="${status:-}"
  prev_blocker="${blocker:-}"
  prev_http_status="${http_status:-}"
  prev_https_valid="${https_valid:-}"
  prev_https_enforced="${https_enforced:-}"
fi

pages_json=""
pages_error=""
pages_api_ok="false"
if capture_command pages_json retry_command 3 5 gh api "repos/$REPO_SLUG/pages"; then
  pages_api_ok="true"
else
  pages_error="$pages_json"
fi

health_json=""
health_error=""
health_api_ok="false"
if capture_command health_json retry_command 3 5 gh api "repos/$REPO_SLUG/pages/health"; then
  health_api_ok="true"
else
  health_error="$health_json"
fi

parse_json() {
  local json="$1"
  local expr="$2"
  python3 -c 'import json, sys
data = json.loads(sys.argv[1])
value = data
for part in sys.argv[2].split("."):
    if not part:
        continue
    if isinstance(value, dict):
        value = value.get(part)
    else:
        value = None
        break
if value is None:
    print("")
elif isinstance(value, bool):
    print("true" if value else "false")
else:
    print(value)
' "$json" "$expr"
}

https_enforced=""
pages_status="unknown"
cname=""
if [[ "$pages_api_ok" == "true" ]]; then
  https_enforced="$(parse_json "$pages_json" "https_enforced")"
  pages_status="$(parse_json "$pages_json" "status")"
  cname="$(parse_json "$pages_json" "cname")"
fi

health_summary="{}"
if [[ "$health_api_ok" == "true" ]]; then
  health_summary="$(python3 -c 'import json, sys; data=json.loads(sys.argv[1]); print("{}" if not data else json.dumps(data, sort_keys=True))' "$health_json")"
fi

http_output="$(retry_command 3 3 curl -I --max-time 20 "http://$SITE_HOST/" 2>&1 || true)"
https_output="$(retry_command 3 3 curl -I --max-time 20 "https://$SITE_HOST/" 2>&1 || true)"

extract_status_code() {
  printf '%s\n' "$1" | awk '/^HTTP\/[0-9.]+/ { code=$2 } END { print code }'
}

http_status="$(extract_status_code "$http_output")"
https_status="$(extract_status_code "$https_output")"

https_valid="false"
blocker=""
status="pending"

if grep -q "no alternative certificate subject name matches" <<<"$https_output"; then
  blocker="wrong_certificate"
elif [[ "$pages_api_ok" != "true" ]]; then
  blocker="github_api_unreachable"
  status="degraded"
elif grep -q "Could not resolve host" <<<"$http_output$https_output"; then
  blocker="dns_invalid"
  status="degraded"
elif grep -q "Failed to connect" <<<"$http_output$https_output"; then
  blocker="site_unreachable"
  status="degraded"
elif [[ -n "$https_status" ]]; then
  https_valid="true"
  blocker="none"
  status="ready"
else
  blocker="https_check_failed"
  status="degraded"
fi

enable_attempt="not_attempted"
enable_error=""

if [[ "$pages_api_ok" == "true" && "$https_valid" == "true" && "$https_enforced" != "true" ]]; then
  enable_response="$(gh api --method PUT "repos/$REPO_SLUG/pages" --field https_enforced=true 2>&1)" && enable_attempt="enabled" || {
    enable_attempt="failed"
    enable_error="$enable_response"
  }
elif [[ "$pages_api_ok" == "true" && "$https_valid" != "true" && "$https_enforced" != "true" ]]; then
  enable_response="$(gh api --method PUT "repos/$REPO_SLUG/pages" --field https_enforced=true 2>&1)" && enable_attempt="enabled" || {
    enable_attempt="failed"
    enable_error="$enable_response"
  }
fi

if [[ "$enable_attempt" == "enabled" ]]; then
  pages_json="$(gh api "repos/$REPO_SLUG/pages")"
  https_enforced="$(parse_json "$pages_json" "https_enforced")"
  http_output="$(curl -I --max-time 20 "http://$SITE_HOST/" 2>&1 || true)"
  https_output="$(curl -I --max-time 20 "https://$SITE_HOST/" 2>&1 || true)"
  http_status="$(extract_status_code "$http_output")"
  https_status="$(extract_status_code "$https_output")"
  if [[ -n "$https_status" ]]; then
    https_valid="true"
    blocker="none"
    status="ready"
  fi
fi

material_change="false"
if [[ "$status" != "$prev_status" || "$blocker" != "$prev_blocker" || "$http_status" != "$prev_http_status" || "$https_valid" != "$prev_https_valid" || "$https_enforced" != "$prev_https_enforced" ]]; then
  material_change="true"
fi

human_message=""
if [[ "$status" == "ready" && "$https_enforced" == "true" && "$https_valid" == "true" ]]; then
  human_message="$READY_TEMPLATE"
elif [[ "$material_change" == "true" && "$first_run" != "true" ]]; then
  human_message="$PENDING_TEMPLATE"
fi

notification_sent="false"
if [[ "$material_change" == "true" && -n "$human_message" && -x "$NOTIFY_CMD" ]]; then
  details="Status: $status | blocker: $blocker | http: ${http_status:-none} | https_valid: $https_valid | https_enforced: $https_enforced | health: $health_summary"
  "$NOTIFY_CMD" --title "$NOTIFY_TITLE" "$human_message"$'\n\n'"$details"
  notification_sent="true"
fi

cat >"$STATE_FILE" <<EOF
status=$status
blocker=$blocker
http_status=${http_status:-}
https_status=${https_status:-}
https_valid=$https_valid
https_enforced=$https_enforced
pages_status=$pages_status
cname=$cname
health_summary=$(printf '%q' "$health_summary")
enable_attempt=$enable_attempt
enable_error=$(printf '%q' "$enable_error")
checked_at=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
pages_api_ok=$pages_api_ok
pages_error=$(printf '%q' "$pages_error")
health_api_ok=$health_api_ok
health_error=$(printf '%q' "$health_error")
EOF

cat >"$MEMORY_FILE" <<EOF
$(date +"%Y-%m-%d %H:%M %Z") run: Checked GitHub Pages HTTPS status for $SITE_HOST from /Users/ecohen/Dev/Diez-42.

- Pages API: status=$pages_status, cname=$cname, https_enforced=$https_enforced
- Pages API reachable: $pages_api_ok
- Pages health: $health_summary
- Pages health reachable: $health_api_ok
- HTTP check: ${http_status:-none}
- HTTPS valid: $https_valid
- Blocker: $blocker
- Enable attempt: $enable_attempt
- Gary's friend message:
  "$([[ "$status" == "ready" && "$https_enforced" == "true" && "$https_valid" == "true" ]] && printf '%s' "$READY_TEMPLATE" || printf '%s' "$PENDING_TEMPLATE")"

Notification sent: $notification_sent
EOF

printf 'status=%s\nblocker=%s\nhttp_status=%s\nhttps_valid=%s\nhttps_enforced=%s\nenable_attempt=%s\n' \
  "$status" "$blocker" "${http_status:-}" "$https_valid" "$https_enforced" "$enable_attempt"
