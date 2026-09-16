declare global {
  interface Window {
    Weglot?: {
      initialize: (options: Record<string, unknown>) => void;
      switchTo: (lang: string) => void;
      getCurrentLang: () => string;
      on: (event: string, callback: (...args: unknown[]) => void) => void;
    };
  }
}

function currentLang(): string {
  return window.Weglot?.getCurrentLang?.() ?? 'en';
}

function paintSwitchers(): void {
  const lang = currentLang();

  document.querySelectorAll<HTMLButtonElement>('.lang-switch [data-lang]').forEach((button) => {
    const active = button.dataset.lang === lang;
    button.setAttribute('aria-current', active ? 'true' : 'false');
    button.classList.toggle('is-active', active);
  });
}

function bindSwitchers(): void {
  document.querySelectorAll<HTMLButtonElement>('.lang-switch [data-lang]').forEach((button) => {
    if (button.dataset.bound === 'true') return;
    button.dataset.bound = 'true';

    button.addEventListener('click', () => {
      const code = button.dataset.lang;
      if (code && window.Weglot?.switchTo) {
        window.Weglot.switchTo(code);
      }
      paintSwitchers();
    });

    button.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        button.click();
      }
    });
  });
}

export function initLangSwitch(): void {
  bindSwitchers();
  paintSwitchers();

  if (window.Weglot?.on) {
    window.Weglot.on('initialized', paintSwitchers);
    window.Weglot.on('languageChanged', paintSwitchers);
  }
}

initLangSwitch();
document.addEventListener('astro:page-load', initLangSwitch);
