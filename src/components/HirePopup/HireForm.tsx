import { useState, FormEvent } from 'react';
import { services } from '../Services/ServicesData';
import { sendFormDataToWebhook } from '../../utils/webhookService';
import { HireFormProps } from './types';
import { Sparkles } from 'lucide-react';

export function HireForm({ onClose, selectedServiceId }: HireFormProps) {
  const [selectedSchedule, setSelectedSchedule] = useState<'asap' | 'calendar' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const selectedServices = services
        .filter((_, index) => formData.get(`service-${index}`))
        .map(service => service.title);

      // Add ISI if selected
      if (formData.get('isi-service')) {
        selectedServices.push('I.S.I Framework');
      }

      const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        company: formData.get('company') as string,
        services: selectedServices,
        schedulePreference: selectedSchedule as 'asap' | 'calendar',
      };

      await sendFormDataToWebhook(data);
      
      window.open('https://calendly.com/hahnedigital/30min', '_blank');
      onClose();
    } catch (error) {
      setFormError('There was an error submitting the form. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const highlightAITerms = (text: string) => {
    const words = text.split(' ');
    return words.map((word, index) => {
      const isLastWord = index === words.length - 1;
      if (word.includes('AI') || word === 'Automated') {
        return (
          <span key={index}>
            <span className="text-amber-400">{word}</span>
            {!isLastWord && ' '}
          </span>
        );
      }
      return (
        <span key={index}>
          {word}{!isLastWord && ' '}
        </span>
      );
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {formError && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-2 rounded-lg text-sm">
          {formError}
        </div>
      )}

      {/* Required Fields */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2 bg-black/40 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-500 text-white text-sm"
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 bg-black/40 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-500 text-white text-sm"
          placeholder="Enter your email"
        />
      </div>

      {/* Optional Fields */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
          Phone Number <span className="text-gray-500">(Optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-2 bg-black/40 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-500 text-white text-sm"
          placeholder="Enter your phone number"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
          Company Name <span className="text-gray-500">(Optional)</span>
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full px-4 py-2 bg-black/40 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-500 text-white text-sm"
          placeholder="Enter your company name"
        />
      </div>

      {/* Services Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-3">
          Services Interested In <span className="text-red-500">*</span>
        </label>
        <div className="space-y-3">
          {services.map((service, index) => (
            <label key={service.id} className="flex items-center space-x-3">
              <input
                type="checkbox"
                name={`service-${index}`}
                defaultChecked={service.id === selectedServiceId}
                className="w-4 h-4 rounded border-gray-700 text-amber-500 focus:ring-amber-500 focus:ring-offset-gray-900"
              />
              <span className="text-gray-300 text-sm">{highlightAITerms(service.title)}</span>
            </label>
          ))}
          
          {/* I.S.I Option */}
          <label className="flex items-center space-x-3 relative">
            <input
              type="checkbox"
              name="isi-service"
              className="w-4 h-4 rounded border-gray-700 text-amber-500 focus:ring-amber-500 focus:ring-offset-gray-900"
            />
            <span className="text-gray-300 text-sm flex items-center space-x-2 group">
              <span className="bg-gradient-to-r from-red-500 to-amber-400 bg-clip-text text-transparent font-semibold">
                I.S.I Framework
              </span>
              <Sparkles 
                size={14} 
                className="text-amber-400 opacity-50 group-hover:opacity-100 transition-opacity"
              />
            </span>
            <div className="absolute -left-2 -right-2 -top-2 -bottom-2 border border-amber-500/20 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </label>
        </div>
      </div>

      {/* Schedule Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-3">
          When would you like to schedule a meeting? <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setSelectedSchedule('asap')}
            className={`px-4 py-2 rounded-lg border text-sm ${
              selectedSchedule === 'asap'
                ? 'border-amber-500 bg-amber-500/20 text-white'
                : 'border-gray-700 text-gray-300 hover:border-amber-500/50'
            } transition-colors`}
          >
            ASAP
          </button>
          <button
            type="button"
            onClick={() => setSelectedSchedule('calendar')}
            className={`px-4 py-2 rounded-lg border text-sm ${
              selectedSchedule === 'calendar'
                ? 'border-amber-500 bg-amber-500/20 text-white'
                : 'border-gray-700 text-gray-300 hover:border-amber-500/50'
            } transition-colors`}
          >
            Let me see openings
          </button>
        </div>
      </div>

      <button
        type="submit"
        disabled={!selectedSchedule || isSubmitting}
        className="w-full bg-gradient-to-r from-red-600 to-amber-500 text-white px-4 py-3 rounded-lg hover:from-red-700 hover:to-amber-600 transition-all font-light tracking-wider disabled:opacity-50 disabled:cursor-not-allowed text-sm mt-4"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Request'}
      </button>
    </form>
  );
}