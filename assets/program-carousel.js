/* Enhance the static program grid with accessible, manual carousel navigation. */
(() => {
  const rail = document.querySelector("[data-program-carousel]");
  const controls = document.querySelector("[data-program-controls]");
  const previous = controls?.querySelector("[data-program-previous]");
  const next = controls?.querySelector("[data-program-next]");
  const status = controls?.querySelector("[data-program-status]");
  const cards = Array.from(rail?.querySelectorAll("[data-program-card]") || []);
  if (!rail || !controls || !previous || !next || !status || !cards.length) return;

  let moving = false;
  let releaseTimer;
  let scrollFrame;
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  rail.classList.add("is-carousel");
  controls.hidden = false;

  /** Read the current responsive page size and nearest visible card. */
  const position = () => {
    const step = cards.length > 1 ? cards[1].offsetLeft - cards[0].offsetLeft : rail.clientWidth;
    const visible = Math.max(1, Math.round(rail.clientWidth / cards[0].getBoundingClientRect().width));
    const last = Math.max(0, cards.length - visible);
    const first = Math.max(0, Math.min(last, Math.round(rail.scrollLeft / step)));
    return { step, visible, last, first };
  };

  /** Acknowledge navigation synchronously and keep boundary controls accurate. */
  const render = (target = position().first) => {
    const { visible, last } = position();
    const range = visible === 1 ? `${target + 1}` : `${target + 1}–${Math.min(cards.length, target + visible)}`;
    const label = `${range} / ${cards.length}`;
    if (status.textContent !== label) status.textContent = label;
    previous.disabled = moving || target === 0;
    next.disabled = moving || target >= last;
    rail.setAttribute("aria-busy", String(moving));
  };

  /** Release the short animation latch after scrolling ends or is interrupted. */
  const settle = () => {
    window.clearTimeout(releaseTimer);
    moving = false;
    render();
  };

  /** Move one responsive page; repeated activations never queue extra moves. */
  const move = (target) => {
    if (moving) return;
    const { step, last, first } = position();
    const destination = Math.max(0, Math.min(last, target));
    if (destination === first) return;
    moving = true;
    render(destination);
    rail.scrollTo({ left: destination * step, behavior: motion.matches ? "instant" : "smooth" });
    releaseTimer = window.setTimeout(settle, 600);
  };

  previous.addEventListener("click", () => {
    const { first, visible } = position();
    move(first - visible);
  });
  next.addEventListener("click", () => {
    const { first, visible } = position();
    move(first + visible);
  });
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
    scrollFrame = window.requestAnimationFrame(() => { if (!moving) render(); });
  }, { passive: true });
  rail.addEventListener("scrollend", settle);
  new ResizeObserver(() => { if (!moving) render(); }).observe(rail);
  render();
})();
