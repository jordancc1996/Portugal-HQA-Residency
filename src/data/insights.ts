export interface InsightArticle {
  href: string;
  title: string;
  description: string;
  category: string;
  updated: string;
  previewImage: string;
  previewAlt: string;
}

export interface InsightGroup {
  heading: string;
  articles: InsightArticle[];
}

export const insightGroups: InsightGroup[] = [
  {
    heading: 'Program and legal basis',
    articles: [
      {
        href: '/portugal-hqa-visa',
        title: 'Portugal HQA Visa - Highly Qualified Activity Residence',
        description:
          'Portugal HQA visa explained for qualified professionals: 2026 eligibility, costs, processing, and family residence. Informational only, not legal advice.',
        category: 'Program',
        updated: '2026-09-16',
        previewImage: '/images/portugal-hqa-visa-preview.webp',
        previewAlt: 'Yellow modern colonnade with dark windows and white diagonal steel beams',
      },
      {
        href: '/portugal-highly-qualified-activity-visa',
        title: 'Portugal Highly Qualified Activity Visa - Official Name and Meaning',
        description:
          'Portugal Highly Qualified Activity visa is the official 2026 name for HQA residence. This page defines the term and points you to the full program guide.',
        category: 'Program',
        updated: '2026-09-16',
        previewImage: '/images/portugal-highly-qualified-activity-visa-preview.webp',
        previewAlt: 'Aerial view of Porto riverside at sunset, with boats on the Douro and terracotta roofs along Ribeira',
      },
      {
        href: '/portugal-article-90-residence-permit',
        title: 'Portugal Article 90 Residence Permit - Legal Basis for HQA',
        description:
          'Portugal Article 90 residence permit is the legal heading for HQA stay. See how Article 90 maps to 2026 requirements and the consular application path.',
        category: 'Legal',
        updated: '2026-09-16',
        previewImage: '/images/portugal-article-90-residence-permit-preview.webp',
        previewAlt: 'Orange-roofed houses and a funicular below a stone city wall in Porto',
      },
    ],
  },
  {
    heading: 'Eligibility and process',
    articles: [
      {
        href: '/portugal-hqa-visa-requirements',
        title: 'Portugal HQA Visa Requirements - Role, Host, and Stay',
        description:
          'Portugal HQA visa requirements cover the 2026 role, host, and stay tests. Use this hub for eligibility, documents, and obligations after card approval.',
        category: 'Requirements',
        updated: '2026-09-16',
        previewImage: '/images/portugal-hqa-visa-requirements-preview.webp',
        previewAlt: 'Stone seaward wall and sentry turret above limestone rocks, with open Atlantic water beyond',
      },
      {
        href: '/portugal-hqa-visa-eligibility',
        title: 'Portugal HQA Visa Eligibility - Who Qualifies',
        description:
          'Portugal HQA visa eligibility is who qualifies in 2026: the role, the host, and the applicant tests, before you assemble the supporting document checklist.',
        category: 'Requirements',
        updated: '2026-09-16',
        previewImage: '/images/portugal-hqa-visa-eligibility-preview.webp',
        previewAlt: 'Roman temple columns in an Évora square facing a white palace and church tower',
      },
      {
        href: '/portugal-hqa-visa-documents',
        title: 'Portugal HQA Visa Documents - Filing Checklist',
        description:
          'Portugal HQA visa documents are the 2026 filing pack: identity, host, qualifications, and criminal-record evidence, listed before you lodge the application.',
        category: 'Requirements',
        updated: '2026-09-16',
        previewImage: '/images/portugal-hqa-visa-documents-preview.webp',
        previewAlt: 'Belém Tower, a limestone riverside fortress in Lisbon, photographed from the water',
      },
      {
        href: '/portugal-hqa-visa-residency-requirements',
        title: 'Portugal HQA Visa Residency Requirements - After Approval',
        description:
          'Portugal HQA visa residency requirements are the 2026 stay tests after approval: activity, absences, and registered address, before you plan a card renewal.',
        category: 'Requirements',
        updated: '2026-09-16',
        previewImage: '/images/portugal-hqa-visa-residency-requirements-preview.webp',
        previewAlt: 'Yellow arcades and a white riverside palace on Praça do Comércio in Lisbon',
      },
      {
        href: '/portugal-hqa-visa-application',
        title: 'Portugal HQA Visa Application - Step-by-Step Filing',
        description:
          'Portugal HQA visa application in 2026 is the lodging path: pack, consulate or AIMA, biometrics, then the card. Follow the numbered steps before you file.',
        category: 'Process',
        updated: '2026-09-16',
        previewImage: '/images/portugal-hqa-visa-application-preview.webp',
        previewAlt: 'White historic facade beside a later office block, with a tree, paved walk, and iron railing',
      },
      {
        href: '/portugal-hqa-visa-processing-time',
        title: 'Portugal HQA Visa Processing Time - What Affects Speed',
        description:
          'Portugal HQA visa processing time in 2026 depends on the post, the pack, and AIMA queues. See what slows a file, then decide whether to instruct counsel.',
        category: 'Process',
        updated: '2026-09-16',
        previewImage: '/images/portugal-hqa-visa-processing-time-preview.webp',
        previewAlt: 'Row of white and ochre houses along a tidal mudflat, with parked cars and wading birds',
      },
      {
        href: '/portugal-hqa-visa-renewal',
        title: 'Portugal HQA Visa Renewal - Next Card After Approval',
        description:
          'Portugal HQA visa renewal in 2026 is the next card file: activity, absences, and timing, after stay rules and before you start a permanent residence filing.',
        category: 'Process',
        updated: '2026-09-16',
        previewImage: '/images/portugal-hqa-visa-renewal-preview.webp',
        previewAlt: 'White houses with terracotta roofs stacked on a sea cliff above breaking waves',
      },
    ],
  },
  {
    heading: 'Cost, investment, and tax',
    articles: [
      {
        href: '/portugal-hqa-visa-cost',
        title: 'Portugal HQA Visa Cost - Fees and Professional Spend',
        description:
          'Portugal HQA visa cost in 2026 is state fees plus translations and counsel, not a Golden Visa subscription. See the fee groups before you file the pack.',
        category: 'Cost',
        updated: '2026-09-16',
        previewImage: '/images/portugal-hqa-visa-cost-preview.webp',
        previewAlt: 'Narrow cobbled lane between yellow and cream houses that opens onto a beach and the sea',
      },
      {
        href: '/portugal-hqa-visa-investment',
        title: 'Portugal HQA Visa Investment - No Capital Subscription',
        description:
          'Portugal HQA visa investment is not a capital buy-in in 2026. There is no Golden Visa-style subscription; salary and subsistence remain separate tests.',
        category: 'Cost',
        updated: '2026-09-16',
        previewImage: '/images/portugal-hqa-visa-investment-preview.webp',
        previewAlt: 'Street-level farmácia and shopfront on a tiled Portuguese house with iron balconies',
      },
      {
        href: '/portugal-hqa-visa-tax',
        title: 'Portugal HQA Visa Tax - Residence and Filing',
        description:
          'Portugal HQA visa tax questions in 2026 turn on whether you become Portuguese tax resident. Confirm filing duties with a licensed tax professional first.',
        category: 'Tax',
        updated: '2026-09-16',
        previewImage: '/images/portugal-hqa-visa-tax-preview.webp',
        previewAlt: 'Canal-front row of ornate Portuguese townhouses, colorful boats, and pedestrians',
      },
    ],
  },
  {
    heading: 'Family and long-term status',
    articles: [
      {
        href: '/portugal-hqa-visa-family',
        title: 'Portugal HQA Visa Family - Spouse and Children Coverage',
        description:
          'Portugal HQA visa family coverage in 2026 is spouse and children on the principal file, not automatic cards. Open this hub, then the two supporting pages.',
        category: 'Family',
        updated: '2026-09-16',
        previewImage: '/images/portugal-hqa-visa-family-preview.webp',
        previewAlt: 'White courtyard walls with dark doorways opening onto grass under a blue sky',
      },
      {
        href: '/portugal-hqa-visa-spouse',
        title: 'Portugal HQA Visa Spouse - Partner Residence Coverage',
        description:
          'Portugal HQA visa spouse coverage in 2026 is the partner on a highly qualified activity file. Proof of the relationship still has to meet the current list.',
        category: 'Family',
        updated: '2026-09-16',
        previewImage: '/images/portugal-hqa-visa-spouse-preview.webp',
        previewAlt: 'Couple sitting together on a riverside quay in mist, facing warehouses across the water',
      },
      {
        href: '/portugal-hqa-visa-children',
        title: 'Portugal HQA Visa Children - Dependent Residence Coverage',
        description:
          'Portugal HQA visa children coverage in 2026 is dependent children on the principal file. Age and dependency tests still have to match the current list.',
        category: 'Family',
        updated: '2026-09-16',
        previewImage: '/images/portugal-hqa-visa-children-preview.webp',
        previewAlt: 'Child in a patterned cap leaning on a stone wall, looking down at dark sea cliffs',
      },
      {
        href: '/portugal-hqa-visa-permanent-residency',
        title: 'Portugal HQA Visa Permanent Residency - After Legal Stay',
        description:
          'Portugal HQA visa permanent residency in 2026 follows a period of legal stay, not the first card. See timing and tests, then family and renewal context.',
        category: 'Long-term',
        updated: '2026-09-16',
        previewImage: '/images/portugal-hqa-visa-permanent-residency-preview.webp',
        previewAlt: 'Empty dark wooden benches rising in a curved lecture hall with white walls',
      },
      {
        href: '/portugal-hqa-visa-citizenship',
        title: 'Portugal HQA Visa Citizenship - Naturalization After Residence',
        description:
          'Portugal HQA visa citizenship in 2026 is naturalization after legal residence, not an automatic upgrade from the first HQA card. Start from permanent residency.',
        category: 'Long-term',
        updated: '2026-09-16',
        previewImage: '/images/portugal-hqa-visa-citizenship-preview.webp',
        previewAlt: 'People walking through a tall colonnade with polished floors and angled steel supports',
      },
    ],
  },
  {
    heading: 'Research hosts',
    articles: [
      {
        href: '/portugal-research-visa',
        title: 'Portugal Research Visa - Hosted Highly Qualified Research',
        description:
          'Portugal research visa queries usually mean hosted highly qualified research in 2026, not a student stay. Open the research project and university pages next.',
        category: 'Research',
        updated: '2026-09-16',
        previewImage: '/images/portugal-research-visa-preview.webp',
        previewAlt: 'Sunlit Ribeira waterfront in Porto, with boats on the Douro and packed terracotta roofs',
      },
      {
        href: '/portugal-hqa-visa-research-project',
        title: 'Portugal HQA Visa Research Project - Funded Host Pathway',
        description:
          'Portugal HQA visa research project files in 2026 are funded laboratory or grant hosts, not a student stay. See what a project letter must still prove.',
        category: 'Research',
        updated: '2026-09-16',
        previewImage: '/images/portugal-hqa-visa-research-project-preview.webp',
        previewAlt: 'Moliceiro boats on the canal in Aveiro, with tiled facades and pedestrians on the quay',
      },
      {
        href: '/portugal-hqa-visa-university',
        title: 'Portugal HQA Visa University - Academic Affiliation Pathway',
        description:
          'Portugal HQA visa university affiliation in 2026 is an academic host path, not a degree visa. See how a university contract is tested for HQA eligibility.',
        category: 'Research',
        updated: '2026-09-16',
        previewImage: '/images/portugal-hqa-visa-university-preview.webp',
        previewAlt: 'Historic university courtyard with terracotta roofs, a stone pediment, and a person in a black academic cape',
      },
    ],
  },
  {
    heading: 'Audience and professional support',
    articles: [
      {
        href: '/portugal-hqa-visa-for-americans',
        title: 'Portugal HQA Visa for Americans - US Tax and Route Fit',
        description:
          'Portugal HQA visa for Americans in 2026 still turns on a Portuguese host and role. US tax residency rules stay in force; compare routes before you file.',
        category: 'Audience',
        updated: '2026-09-16',
        previewImage: '/images/portugal-hqa-visa-for-americans-preview.webp',
        previewAlt: 'Stone statue of a man in sixteenth-century dress on a paved terrace, with hills beyond',
      },
      {
        href: '/portugal-hqa-visa-for-h1b-holders',
        title: 'Portugal HQA Visa for H-1B Holders',
        description:
          'Explore the Portugal HQA Visa for H-1B holders seeking an alternative path to European residency based on highly qualified professional activity in Portugal.',
        category: 'Audience',
        updated: '2026-09-17',
        previewImage: '/images/portugal-hqa-visa-for-h1b-holders-preview.webp',
        previewAlt: 'Clérigos Tower rising above the rooftops of Porto at sunset',
      },
      {
        href: '/alternatives-to-h1b-visas-portugal-hqa',
        title: 'Alternatives to H-1B Visas: The Portugal HQA Program',
        description:
          "Explore alternatives to H-1B visas and how Portugal's HQA pathway may provide a European residence option for qualifying professionals, with a 30-day decision.",
        category: 'Audience',
        updated: '2026-09-30',
        previewImage: '/images/alternatives-to-h1b-visas-portugal-hqa-preview.webp',
        previewAlt:
          'Hillside of cream buildings with terracotta roofs rising to a white clock-tower building, above a river and a bridge',
      },
      {
        href: '/portugal-hqa-visa-lawyer',
        title: 'Portugal HQA Visa Lawyer - When Legal Counsel Helps',
        description:
          'Portugal HQA visa lawyer work in 2026 is legal advice on the host, the pack, and the post. Use counsel when the facts are not a standard employed file.',
        category: 'Professional',
        updated: '2026-09-16',
        previewImage: '/images/portugal-hqa-visa-lawyer-preview.webp',
        previewAlt: 'Man walking away down a cobbled lane past a green Volkswagen Beetle',
      },
      {
        href: '/portugal-hqa-visa-consultant',
        title: 'Portugal HQA Visa Consultant - Lawyer Versus Process Support',
        description:
          'Portugal HQA visa consultant support in 2026 is process and document logistics, not a substitute for a lawyer. Compare both, then cost and application.',
        category: 'Professional',
        updated: '2026-09-16',
        previewImage: '/images/portugal-hqa-visa-consultant-preview.webp',
        previewAlt: 'Lisbon square lined with pastel apartment buildings, cafe tables, and a cloudy sky',
      },
    ],
  },
  {
    heading: 'Comparisons',
    articles: [
      {
        href: '/portugal-hqa-visa-vs-golden-visa',
        title: 'Portugal HQA Visa vs Golden Visa - Host Route or Capital Route',
        description:
          'Portugal HQA visa vs Golden Visa in 2026 is a Portuguese host versus a capital ticket. Read the side-by-side table, then the cost and investment pages.',
        category: 'Comparison',
        updated: '2026-09-16',
        previewImage: '/images/portugal-hqa-visa-vs-golden-visa-preview.webp',
        previewAlt: 'Portuguese flag on a silver pole against a pale, cloudy sky',
      },
      {
        href: '/portugal-hqa-visa-vs-d7',
        title: 'Portugal HQA Visa vs D7 - Host Route or Passive Income',
        description:
          'Portugal HQA visa vs D7 in 2026 is a Portuguese host versus passive-income residence. Read the side-by-side table, then who qualifies before you file.',
        category: 'Comparison',
        updated: '2026-09-16',
        previewImage: '/images/portugal-hqa-visa-vs-d7-preview.webp',
        previewAlt: 'Portuguese flag on a white pole against a clear blue sky',
      },
      {
        href: '/portugal-hqa-visa-vs-d2',
        title: 'Portugal HQA Visa vs D2 - Qualified Activity or Entrepreneurship',
        description:
          'Portugal HQA visa vs D2 in 2026 is highly qualified activity versus entrepreneurship. Read the side-by-side table, then who qualifies before you file.',
        category: 'Comparison',
        updated: '2026-09-16',
        previewImage: '/images/portugal-hqa-visa-vs-d2-preview.webp',
        previewAlt: 'Portuguese flag on a black pole above a ruined stone wall',
      },
      {
        href: '/portugal-hqa-visa-vs-digital-nomad-visa',
        title: 'Portugal HQA Visa vs Digital Nomad Visa - Local Host or Remote Work',
        description:
          'Portugal HQA visa vs digital nomad visa in 2026 is a local host versus remote foreign work. Read the table, then eligibility and the long-term residence path.',
        category: 'Comparison',
        updated: '2026-09-16',
        previewImage: '/images/portugal-hqa-visa-vs-digital-nomad-visa-preview.webp',
        previewAlt: 'Stone fortress turret and masonry walls under a deep blue sky',
      },
      {
        href: '/portugal-hqa-visa-vs-tech-visa',
        title: 'Portugal HQA Visa vs Tech Visa - Residence Heading or Hiring Path',
        description:
          'Portugal HQA visa vs Tech Visa in 2026 is the residence heading versus a tech-hiring facilitation. Read the table, then who qualifies for HQA this year.',
        category: 'Comparison',
        updated: '2026-09-16',
        previewImage: '/images/portugal-hqa-visa-vs-tech-visa-preview.webp',
        previewAlt: 'Portuguese and Lisbon flags on São Jorge castle walls, looking over the Tagus',
      },
      {
        href: '/portugal-hqa-visa-vs-eu-blue-card',
        title: 'Portugal HQA Visa vs EU Blue Card - National Route or EU Permit',
        description:
          'Portugal HQA visa vs EU Blue Card in 2026 is national highly qualified activity versus the EU employment permit. Read the table, then HQA eligibility.',
        category: 'Comparison',
        updated: '2026-09-16',
        previewImage: '/images/portugal-hqa-visa-vs-eu-blue-card-preview.webp',
        previewAlt: 'Cream facade with tiled lettering, stone balconies, and a black lantern',
      },
    ],
  },
];

export const insightArticles = insightGroups.flatMap((group) => group.articles);

function publicationTimestamp(iso: string): number {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!match) {
    throw new Error(`Insights article is missing a valid date: ${iso}`);
  }
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const time = Date.UTC(year, month - 1, day);
  const check = new Date(time);
  if (check.getUTCFullYear() !== year || check.getUTCMonth() !== month - 1 || check.getUTCDate() !== day) {
    throw new Error(`Insights article has an invalid date: ${iso}`);
  }
  return time;
}

/** Newest publication date first. Same dates keep the existing source order. */
export const insightArticlesByPublication = insightArticles
  .map((article, index) => ({ article, index }))
  .sort((a, b) => {
    const delta = publicationTimestamp(b.article.updated) - publicationTimestamp(a.article.updated);
    return delta !== 0 ? delta : a.index - b.index;
  })
  .map(({ article }) => article);

export function insightByHref(href: string): InsightArticle | undefined {
  const path = href.replace(/\/+$/, '') || '/';
  return insightArticles.find((article) => article.href === path);
}
