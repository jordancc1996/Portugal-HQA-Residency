const BAR_SELECTOR = '#reading-progress';
const FILL_SELECTOR = '[data-reading-progress-fill]';

let bar: HTMLElement | null = null;
let fill: HTMLElement | null = null;
let ticking = false;
let lastPercent = -1;

function scrollProgress(): number {
  const root = document.documentElement;
  const scrollable = root.scrollHeight - root.clientHeight;

  if (scrollable <= 0) return 100;

  const ratio = window.scrollY / scrollable;
  return Math.min(100, Math.max(0, ratio * 100));
}

function applyProgress(): void {
  ticking = false;
  if (!bar || !fill) return;

  const percent = scrollProgress();
  const rounded = Math.round(percent);

  fill.style.transform = `scaleX(${percent / 100})`;

  if (rounded !== lastPercent) {
    lastPercent = rounded;
    bar.setAttribute('aria-valuenow', String(rounded));
  }
}

function requestUpdate(): void {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(applyProgress);
}

function bind(): void {
  bar = document.querySelector<HTMLElement>(BAR_SELECTOR);
  fill = document.querySelector<HTMLElement>(FILL_SELECTOR);
  requestUpdate();
}

bind();
window.addEventListener('scroll', requestUpdate, { passive: true });
window.addEventListener('resize', requestUpdate);
window.addEventListener('load', requestUpdate);
document.addEventListener('astro:page-load', bind);
