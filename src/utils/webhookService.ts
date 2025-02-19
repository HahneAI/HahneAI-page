const WEBHOOK_URL = 'https://hook.us1.make.com/zvnjr8gc70nwsxd2g4k77lqj6f9qbzsa';

interface FormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  services: string[];
  schedulePreference: 'asap' | 'calendar';
}

interface WebhookPayload {
  timestamp: string;
  requestType: 'consultation';
  contactInfo: {
    fullName: string;
    emailAddress: string;
    phoneNumber?: string;
    companyName?: string;
  };
  serviceDetails: {
    selectedServices: string[];
    schedulingPreference: string;
  };
  metadata: {
    source: string;
    userAgent: string;
    timezone: string;
  };
}

export async function sendFormDataToWebhook(data: FormData): Promise<Response> {
  const payload: WebhookPayload = {
    timestamp: new Date().toISOString(),
    requestType: 'consultation',
    contactInfo: {
      fullName: data.name,
      emailAddress: data.email,
      phoneNumber: data.phone,
      companyName: data.company
    },
    serviceDetails: {
      selectedServices: data.services,
      schedulingPreference: data.schedulePreference
    },
    metadata: {
      source: window.location.href,
      userAgent: navigator.userAgent,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    }
  };

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;
  } catch (error) {
    console.error('Error sending form data:', error);
    throw error;
  }
}