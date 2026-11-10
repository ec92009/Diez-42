/* Accessible autoplay and direct navigation for the static program cards. */
(() => {
  const rail = document.querySelector("[data-program-carousel]");
  const controls = document.querySelector("[data-program-controls]");
  const previous = controls?.querySelector("[data-program-previous]");
  const next = controls?.querySelector("[data-program-next]");
  const status = controls?.querySelector("[data-program-status]");
  const menu = controls?.querySelector("[data-program-jump]");
  const playback = controls?.querySelector("[data-program-pause]");
  const playLabel = playback?.querySelector("[data-program-play-label]");
  const pauseLabel = playback?.querySelector("[data-program-pause-label]");
  const cards = Array.from(rail?.querySelectorAll("[data-program-card]") || []);
  if (!rail || !controls || !previous || !next || !status || !menu || !playback || !cards.length) return;

  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let paused = motion.matches;
  let moving = false;
  let requestedFirst = 0;
  let inView = false;
  let hovering = false;
  let focused = false;
  let dragging = false;
  let menuFocused = false;
  let activeProgram = 0;
  let releaseTimer;
  let autoTimer;
  let scrollFrame;
  rail.classList.add("is-carousel");
  controls.hidden = false;

  /** Read the responsive page size and nearest visible card. */
  const position = () => {
    const step = cards.length > 1 ? cards[1].offsetLeft - cards[0].offsetLeft : rail.clientWidth;
    const visible = Math.max(1, Math.round(rail.clientWidth / cards[0].getBoundingClientRect().width));
    const last = Math.max(0, cards.length - visible);
    const first = Math.max(0, Math.min(last, Math.round(rail.scrollLeft / step)));
    return { step, visible, last, first };
  };

  /** Populate direct-access labels from the already translated card headings. */
  const updateOptions = () => {
    const options = cards.map((card, index) => {
      const option = document.createElement("option");
      option.value = String(index);
      option.textContent = `${String(index + 1).padStart(2, "0")} · ${card.querySelector("h3").textContent}`;
      return option;
    });
    menu.replaceChildren(...options);
    menu.value = String(activeProgram);
  };

  /** Acknowledge navigation and playback changes before any animation starts. */
  const render = (target = moving ? requestedFirst : position().first) => {
    const { visible, last } = position();
    if (activeProgram < target || activeProgram >= target + visible) activeProgram = target;
    const range = visible === 1 ? `${target + 1}` : `${target + 1}–${Math.min(cards.length, target + visible)}`;
    const label = `${range} / ${cards.length}`;
    if (status.textContent !== label) status.textContent = label;
    previous.disabled = moving || target === 0;
    next.disabled = moving || target >= last;
    menu.disabled = moving;
    menu.value = String(activeProgram);
    playback.setAttribute("aria-pressed", String(paused));
    playLabel.hidden = !paused;
    pauseLabel.hidden = paused;
    rail.setAttribute("aria-busy", String(moving));
  };

  /** Run only while the cards are visible and the visitor is not interacting. */
  function schedule() {
    window.clearTimeout(autoTimer);
    if (paused || moving || !inView || document.hidden || hovering || focused || dragging || menuFocused) return;
    autoTimer = window.setTimeout(() => {
      const { first, last } = position();
      move(first >= last ? 0 : first + 1, { automatic: true, wrap: first >= last });
    }, 6000);
  }

  /** Release the navigation latch after scrolling ends or is interrupted. */
  const settle = () => {
    window.clearTimeout(releaseTimer);
    moving = false;
    render();
    schedule();
  };

  /** Move directly or by one page without queuing repeated activations. */
  function move(target, { automatic = false, wrap = false } = {}) {
    if (moving) return;
    const { step, last, first } = position();
    const destination = Math.max(0, Math.min(last, target));
    activeProgram = Math.max(0, Math.min(cards.length - 1, target));
    status.setAttribute("aria-live", automatic ? "off" : "polite");
    if (destination === first) { render(destination); schedule(); return; }
    requestedFirst = destination;
    moving = true;
    render(destination);
    schedule();
    rail.scrollTo({ left: destination * step, behavior: motion.matches || wrap ? "instant" : "smooth" });
    releaseTimer = window.setTimeout(settle, 600);
  }

  previous.addEventListener("click", () => {
    const { first, visible } = position();
    move(first - visible);
  });
  next.addEventListener("click", () => {
    const { first, visible } = position();
    move(first + visible);
  });
  menu.addEventListener("change", () => {
    if (moving) { menu.value = String(activeProgram); return; }
    move(Number(menu.value));
  });
  menu.addEventListener("focus", () => { menuFocused = true; schedule(); });
  menu.addEventListener("blur", () => { menuFocused = false; schedule(); });
  playback.addEventListener("click", () => { paused = !paused; render(); schedule(); });
  rail.addEventListener("keydown", (event) => {
    if (event.target !== rail) return;
    const { first, visible, last } = position();
    const targets = { ArrowLeft: first - visible, ArrowRight: first + visible, Home: 0, End: last };
    if (!(event.key in targets)) return;
    event.preventDefault();
    move(targets[event.key]);
  });
  rail.addEventListener("scroll", () => {
    window.cancelAnimationFrame(scrollFrame);
    scrollFrame = window.requestAnimationFrame(() => { if (!moving) { render(); schedule(); } });
  }, { passive: true });
  rail.addEventListener("scrollend", settle);
  rail.addEventListener("mouseenter", () => { hovering = true; schedule(); });
  rail.addEventListener("mouseleave", () => { hovering = false; schedule(); });
  rail.addEventListener("focusin", () => { focused = true; schedule(); });
  rail.addEventListener("focusout", () => {
    window.queueMicrotask(() => { focused = rail.contains(document.activeElement); schedule(); });
  });
  rail.addEventListener("pointerdown", () => { dragging = true; schedule(); });
  window.addEventListener("pointerup", () => { dragging = false; schedule(); });
  window.addEventListener("pointercancel", () => { dragging = false; schedule(); });
  document.addEventListener("visibilitychange", schedule);
  motion.addEventListener("change", () => {
    if (motion.matches) paused = true;
    render();
    schedule();
  });
  new ResizeObserver(() => { if (!moving) { render(); schedule(); } }).observe(rail);
  new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting && entry.intersectionRatio >= 0.15;
    schedule();
  }, { threshold: 0.15 }).observe(rail);
  new MutationObserver(updateOptions).observe(rail, { childList: true, subtree: true, characterData: true });
  updateOptions();
  render();
})();
