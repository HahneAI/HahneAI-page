import { SystemRequestData } from './types';

export interface Phase1Data {
  companyName: string;
  industry: string;
  contactName: string;
  contactEmail: string;
  contactPhone?: string;
}

export interface PhaseProps {
  data: Partial<SystemRequestData>;
  updateData: (data: Partial<SystemRequestData>) => void;
  // onNext: () => void;
  // onBack: () => void;
}

export interface SystemRequestData {
  phase1: Partial<Phase1Data>;
  phase2: {
    challengeDescription: string;
  };
  phase3: {
    techStack: string;
    budget: string;
    timeline: string;
  };
  phase4: {
    idealSolution: string;
    successMetrics: string;
    integrationNeeds: string;
  };
}
