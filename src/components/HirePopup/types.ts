export interface HireFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  services: string[];
  schedulePreference: 'asap' | 'calendar';
}

export interface HirePopupProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServiceId?: string;
}

export interface HireFormProps {
  onClose: () => void;
  selectedServiceId?: string;
}