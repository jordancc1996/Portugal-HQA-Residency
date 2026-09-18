export interface IntakeContextField {
  label: string;
  name: string;
  options: string[];
}

export const usImmigrationStatusField: IntakeContextField = {
  label: 'Current U.S. Immigration Status',
  name: 'immigrationStatus',
  options: ['H-1B', 'F-1', 'OPT / STEM OPT', 'Green Card', 'U.S. Citizen', 'Other', 'Prefer not to say'],
};

export const estimatedTimelineField = (label: string): IntakeContextField => ({
  label,
  name: 'estimatedTimeline',
  options: ['Within 6 months', '6-12 months', 'Still researching'],
});

export const processStageField = (label: string, options: string[]): IntakeContextField => ({
  label,
  name: 'processStage',
  options,
});

export const comparingOptionsField: IntakeContextField = {
  label: 'Which options are you comparing?',
  name: 'comparingOptions',
  options: [
    'Golden Visa',
    'D7',
    'D2',
    'Digital Nomad Visa',
    'Tech Visa',
    'EU Blue Card',
    'Not sure yet',
  ],
};

export const lawyerNeedField: IntakeContextField = {
  label: 'What do you need a lawyer for?',
  name: 'lawyerNeed',
  options: [
    'Host or contract legal review',
    'Prior refusal or appeal',
    'Family civil-status issues',
    'Standard employed file',
    'Not sure yet',
  ],
};

export const consultantNeedField: IntakeContextField = {
  label: 'What do you need a consultant for?',
  name: 'consultantNeed',
  options: [
    'Document assembly and translations',
    'Host pack logistics',
    'Coordination with a lawyer',
    'Not sure yet',
  ],
};

export const applicationStageField: IntakeContextField = processStageField('Where are you in the process?', [
  'Not yet started',
  'Preparing documents',
  'Application submitted',
  'Waiting on a decision',
]);

export const processingStageField: IntakeContextField = processStageField('Where are you in the process?', [
  'Not yet started',
  'Application submitted',
  'Waiting on AIMA or the consulate',
  'Card issued, tracking later steps',
]);

export const renewalStageField: IntakeContextField = processStageField('Where are you in the renewal?', [
  'Card still valid',
  'Approaching expiry',
  'Already expired',
  'Not sure yet',
]);
