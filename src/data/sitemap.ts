export interface SitemapLink {
  href: string;
  label: string;
  role: 'hub' | 'spoke';
}

/** Cluster hubs the pillar page must link with natural anchor text. */
export const clusterHubs: SitemapLink[] = [
  { href: '/portugal-hqa-visa-requirements', label: 'HQA visa requirements', role: 'hub' },
  { href: '/portugal-hqa-visa-cost', label: 'HQA visa cost', role: 'hub' },
  { href: '/portugal-hqa-visa-application', label: 'HQA visa application', role: 'hub' },
  { href: '/portugal-hqa-visa-family', label: 'HQA visa family', role: 'hub' },
  { href: '/portugal-research-visa', label: 'Research and university hosts', role: 'hub' },
  { href: '/portugal-hqa-visa-permanent-residency', label: 'HQA visa permanent residency', role: 'hub' },
  { href: '/portugal-hqa-visa-lawyer', label: 'HQA visa lawyer and consultant', role: 'hub' },
  { href: '/portugal-hqa-visa-vs-golden-visa', label: 'HQA visa vs Golden Visa', role: 'hub' },
  { href: '/portugal-hqa-visa-vs-d7', label: 'HQA visa vs D7', role: 'hub' },
];

/** Eligibility and requirements cluster: hub plus three spokes. */
export const requirementsCluster: SitemapLink[] = [
  { href: '/portugal-hqa-visa-requirements', label: 'Requirements overview', role: 'hub' },
  { href: '/portugal-hqa-visa-eligibility', label: 'Who qualifies', role: 'spoke' },
  { href: '/portugal-hqa-visa-documents', label: 'Document checklist', role: 'spoke' },
  { href: '/portugal-hqa-visa-residency-requirements', label: 'After approval', role: 'spoke' },
];

/** Cost, investment, and tax cluster. */
export const financialCluster: SitemapLink[] = [
  { href: '/portugal-hqa-visa-cost', label: 'Fees and spend', role: 'hub' },
  { href: '/portugal-hqa-visa-investment', label: 'Investment and capital', role: 'spoke' },
  { href: '/portugal-hqa-visa-tax', label: 'Tax residency', role: 'spoke' },
];

/** Application, processing time, and renewal cluster. */
export const processCluster: SitemapLink[] = [
  { href: '/portugal-hqa-visa-application', label: 'Application steps', role: 'hub' },
  { href: '/portugal-hqa-visa-processing-time', label: 'Processing time', role: 'spoke' },
  { href: '/portugal-hqa-visa-renewal', label: 'Renewal', role: 'spoke' },
];

/** Research-host cluster: search intent plus two host-type pathways. */
export const researchCluster: SitemapLink[] = [
  { href: '/portugal-research-visa', label: 'Research visa search', role: 'hub' },
  { href: '/portugal-hqa-visa-research-project', label: 'Research project host', role: 'spoke' },
  { href: '/portugal-hqa-visa-university', label: 'University host', role: 'spoke' },
];

/** Family coverage cluster: hub plus spouse and children spokes. */
export const familyCluster: SitemapLink[] = [
  { href: '/portugal-hqa-visa-family', label: 'Family overview', role: 'hub' },
  { href: '/portugal-hqa-visa-spouse', label: 'Spouse', role: 'spoke' },
  { href: '/portugal-hqa-visa-children', label: 'Children', role: 'spoke' },
];

/** Permanent residency and citizenship after HQA residence. */
export const longTermCluster: SitemapLink[] = [
  { href: '/portugal-hqa-visa-permanent-residency', label: 'Permanent residency', role: 'hub' },
  { href: '/portugal-hqa-visa-citizenship', label: 'Citizenship', role: 'spoke' },
];

/** Legal counsel and process-support pages. */
export const professionalCluster: SitemapLink[] = [
  { href: '/portugal-hqa-visa-lawyer', label: 'Lawyer', role: 'hub' },
  { href: '/portugal-hqa-visa-consultant', label: 'Consultant', role: 'spoke' },
];

/** HQA versus other Portuguese or EU residence headings. */
export const comparisonCluster: SitemapLink[] = [
  { href: '/portugal-hqa-visa-vs-golden-visa', label: 'HQA vs Golden Visa', role: 'hub' },
  { href: '/portugal-hqa-visa-vs-d7', label: 'HQA vs D7', role: 'spoke' },
  { href: '/portugal-hqa-visa-vs-d2', label: 'HQA vs D2', role: 'spoke' },
  { href: '/portugal-hqa-visa-vs-digital-nomad-visa', label: 'HQA vs digital nomad', role: 'spoke' },
  { href: '/portugal-hqa-visa-vs-tech-visa', label: 'HQA vs Tech Visa', role: 'spoke' },
  { href: '/portugal-hqa-visa-vs-eu-blue-card', label: 'HQA vs EU Blue Card', role: 'spoke' },
];

export const glanceSpokes: SitemapLink[] = [
  { href: '/portugal-hqa-visa-eligibility', label: 'Eligibility basics', role: 'spoke' },
  { href: '/portugal-hqa-visa-cost', label: 'Estimated cost range', role: 'spoke' },
  { href: '/portugal-hqa-visa-processing-time', label: 'Typical processing time', role: 'spoke' },
  { href: '/portugal-hqa-visa-permanent-residency', label: 'Permanent residency and citizenship', role: 'spoke' },
];

export const megaMenuColumns: { title: string; links: SitemapLink[] }[] = [
  {
    title: 'Eligibility & Process',
    links: [
      { href: '/portugal-hqa-visa-requirements', label: 'Requirements', role: 'hub' },
      { href: '/portugal-hqa-visa-eligibility', label: 'Eligibility', role: 'spoke' },
      { href: '/portugal-hqa-visa-documents', label: 'Documents', role: 'spoke' },
      { href: '/portugal-hqa-visa-residency-requirements', label: 'After Approval', role: 'spoke' },
      { href: '/portugal-hqa-visa-application', label: 'Application', role: 'hub' },
      { href: '/portugal-hqa-visa-processing-time', label: 'Processing Time', role: 'spoke' },
      { href: '/portugal-hqa-visa-renewal', label: 'Renewal', role: 'spoke' },
    ],
  },
  {
    title: 'Family & Long-Term',
    links: [
      { href: '/portugal-hqa-visa-family', label: 'Family', role: 'hub' },
      { href: '/portugal-hqa-visa-spouse', label: 'Spouse', role: 'spoke' },
      { href: '/portugal-hqa-visa-children', label: 'Children', role: 'spoke' },
      { href: '/portugal-hqa-visa-permanent-residency', label: 'Permanent Residency', role: 'spoke' },
      { href: '/portugal-hqa-visa-citizenship', label: 'Citizenship', role: 'spoke' },
    ],
  },
];
