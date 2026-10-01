export interface PressRelease {
  href: string;
  title: string;
  description: string;
  published: string;
  previewImage: string;
  previewAlt: string;
  /** False keeps a draft release out of the sitemap and sets noindex. */
  indexable: boolean;
}

export const pressReleases: PressRelease[] = [
  {
    href: '/press/h1b-alternatives-portugal-hqa',
    title: 'H-1B Alternatives: Portugal HQA Program for Qualified Professionals',
    description:
      'Portugal HQA Residency publishes a new resource examining the Portugal HQA pathway for qualifying professionals exploring alternatives to H-1B visas.',
    published: '2026-10-01',
    previewImage: '/images/alternatives-to-h1b-visas-portugal-hqa-preview.webp',
    previewAlt:
      'Hillside of cream buildings with terracotta roofs rising to a white clock-tower building, above a river and a bridge',
    indexable: true,
  },
];

function publicationTimestamp(iso: string): number {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!match) {
    throw new Error(`Press release is missing a valid publication date: ${iso}`);
  }
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const time = Date.UTC(year, month - 1, day);
  const check = new Date(time);
  if (check.getUTCFullYear() !== year || check.getUTCMonth() !== month - 1 || check.getUTCDate() !== day) {
    throw new Error(`Press release has an invalid publication date: ${iso}`);
  }
  return time;
}

export const pressReleasesByDate = [...pressReleases]
  .map((release, index) => ({ release, index }))
  .sort((a, b) => {
    const delta = publicationTimestamp(b.release.published) - publicationTimestamp(a.release.published);
    return delta !== 0 ? delta : a.index - b.index;
  })
  .map(({ release }) => release);

export function pressReleaseByHref(href: string): PressRelease | undefined {
  const path = href.replace(/\/+$/, '') || '/';
  return pressReleases.find((release) => release.href === path);
}
