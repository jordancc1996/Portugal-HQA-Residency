import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/** Fade + rise duration (seconds). Keep short so the motion reads as polish. */
const REVEAL_DURATION = 0.5;
/** Gentler than power2/power3. No bounce. */
const REVEAL_EASE = 'power1.out';
/** Element is nearly in view before the tween starts. */
const REVEAL_START = 'top 90%';
/** Sibling stagger (seconds). Low enough that a group feels like one motion. */
const REVEAL_STAGGER = 0.08;
/** Rise distance (px). Stay well below a dramatic 24px reveal. */
const REVEAL_Y = 12;
/**
 * Parallax travel as a yPercent range (0 → this value).
 * Maximum allowed is 3. Smaller is safer.
 */
const PARALLAX_RANGE = 3;

const READY_CLASS = 'scroll-reveal-ready';

let ctx: gsap.Context | undefined;
let syncScroll: (() => void) | undefined;

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function siblingGroups(selector: string): HTMLElement[][] {
  const nodes = Array.from(document.querySelectorAll<HTMLElement>(selector));
  const groups = new Map<Element, HTMLElement[]>();

  for (const node of nodes) {
    const parent = node.parentElement;
    if (!parent) continue;
    const group = groups.get(parent);
    if (group) group.push(node);
    else groups.set(parent, [node]);
  }

  return Array.from(groups.values());
}

function finishReveal(group: HTMLElement[]): void {
  gsap.set(group, { opacity: 1, y: 0, clearProps: 'transform' });
  for (const el of group) el.classList.remove(READY_CLASS);
}

function initScrollReveal(): void {
  for (const group of siblingGroups('[data-scroll-reveal]')) {
    for (const el of group) el.classList.add(READY_CLASS);

    const replay = group.some((el) => el.hasAttribute('data-scroll-replay'));
    const tween = gsap.fromTo(
      group,
      { opacity: 0, y: REVEAL_Y },
      {
        opacity: 1,
        y: 0,
        duration: REVEAL_DURATION,
        ease: REVEAL_EASE,
        stagger: group.length > 1 ? REVEAL_STAGGER : 0,
        paused: true,
        onComplete() {
          finishReveal(group);
        },
      },
    );

    ScrollTrigger.create({
      trigger: group[0],
      scroller: window,
      start: REVEAL_START,
      once: !replay,
      invalidateOnRefresh: true,
      onEnter: () => tween.play(),
      onLeave: () => {
        if (tween.progress() === 0 && !tween.isActive()) tween.progress(1);
      },
      onEnterBack: () => {
        if (replay) tween.restart();
      },
      onRefresh: (self) => {
        if (self.scroll() >= self.start && tween.progress() === 0 && !tween.isActive()) {
          tween.progress(1);
        }
      },
    });
  }
}

function initParallax(): void {
  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
    gsap.fromTo(
      el,
      { yPercent: 0 },
      {
        yPercent: PARALLAX_RANGE,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      },
    );
  });
}

export function initScrollAnimations(): void {
  ctx?.revert();
  ctx = undefined;
  if (syncScroll) {
    window.removeEventListener('scroll', syncScroll);
    syncScroll = undefined;
  }
  document.querySelectorAll(`.${READY_CLASS}`).forEach((el) => el.classList.remove(READY_CLASS));

  if (prefersReducedMotion()) return;

  ctx = gsap.context(() => {
    initScrollReveal();
    initParallax();
  });

  syncScroll = () => ScrollTrigger.update();
  window.addEventListener('scroll', syncScroll, { passive: true });
  ScrollTrigger.refresh();
}

initScrollAnimations();
document.addEventListener('astro:page-load', initScrollAnimations);
window.addEventListener('load', () => ScrollTrigger.refresh());
