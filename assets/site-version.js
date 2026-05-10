(() => {
  const script = document.currentScript;
  const scriptUrl = script?.src ? new URL(script.src, window.location.href) : null;
  const scriptVersion = scriptUrl?.searchParams.get("v");
  const badgeVersion = document.querySelector("[data-version]")?.textContent?.match(/v([0-9.]+)/)?.[1];
  const version = scriptVersion || badgeVersion;

  if (!version) return;

  const versionedHref = (href) => {
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return href;
    let url;
    try {
      url = new URL(href, window.location.href);
    } catch {
      return href;
    }
    if (url.origin !== window.location.origin) return href;
    const isPage = url.pathname.endsWith("/") || url.pathname.endsWith(".html");
    if (!isPage) return href;
    url.searchParams.set("v", version);
    return url.href;
  };

  const versionElement = (element) => {
    if (!element.matches?.("a[href]")) return;
    const nextHref = versionedHref(element.getAttribute("href"));
    if (nextHref) element.setAttribute("href", nextHref);
  };

  const versionInternalLinks = (root = document) => {
    root.querySelectorAll?.("a[href]").forEach(versionElement);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => versionInternalLinks(), { once: true });
  } else {
    versionInternalLinks();
  }
})();
