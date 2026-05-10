# Versioning SOP

- Use visible app versions in the form `vX.Y`.
- Use bare `X.Y` in repo metadata such as the top-level `VERSION` file.
- For this early mock site, start at `v0.1` and increment `Y` for each user-visible build on the same concept set.
- Apply this SOP when the hub, concept pages, visual direction, copy, navigation, or another user-visible surface changes.
- Do not treat local experiment runs, one-off generated files, or repo-only documentation changes as automatic version bumps by themselves.
- Keep visible version labels, `VERSION`, and CSS/JS cache-bust query strings aligned.
- At the end of each viewer-facing cycle, report:
- localhost URL only if a local server is actually running
- GitHub Pages URL only if a live viewer is actually active
- the exact new version to expect on active surfaces
