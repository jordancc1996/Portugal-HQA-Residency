export const SITE_ORIGIN = (
  typeof import.meta.env.PUBLIC_SITE_URL === 'string' && import.meta.env.PUBLIC_SITE_URL
    ? import.meta.env.PUBLIC_SITE_URL
    : 'https://www.portugalhqaresidency.com'
).replace(/\/$/, '');

export const SITE_NAME = 'Portugal HQA Residency';

export function canonicalPath(pathname: string): string {
  const clean = pathname.replace(/\/+$/, '') || '/';
  return clean.startsWith('/') ? clean : `/${clean}`;
}

export function canonicalUrl(pathname: string, origin = SITE_ORIGIN): string {
  const path = canonicalPath(pathname);
  if (path === '/') return `${origin}/`;
  return `${origin}${path}`;
}

export function absoluteUrl(href: string, origin = SITE_ORIGIN): string {
  if (href.startsWith('http://') || href.startsWith('https://')) return href;
  return canonicalUrl(href, origin);
}

export type Crumb = {
  href?: string;
  label: string;
};

export function organizationJsonLd(origin = SITE_ORIGIN) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${origin}/#organization`,
    name: SITE_NAME,
    url: `${origin}/`,
  };
}

export function breadcrumbListJsonLd(items: Crumb[], currentPath: string, origin = SITE_ORIGIN) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => {
      const path = item.href ?? currentPath;
      return {
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
        item: absoluteUrl(path, origin),
      };
    }),
  };
}

export type FaqEntry = {
  question: string;
  answer: string;
};

export function faqPageJsonLd(entries: FaqEntry[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: entries.map((entry) => ({
      '@type': 'Question',
      name: entry.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: entry.answer,
      },
    })),
  };
}
