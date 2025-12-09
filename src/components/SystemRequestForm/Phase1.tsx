import { PhaseProps } from './types';
import { INDUSTRIES } from './constants';

export function Phase1({ data, updateData }: PhaseProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    updateData({
      phase1: {
        ...data.phase1,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <div className="form-phase-1 space-y-6">
      <h2 className="text-2xl font-bold mb-4 text-white">Phase 1: Basic Information</h2>

      <div>
        <label htmlFor="companyName" className="block text-sm font-medium text-neutral-300 mb-2">
          Company Name <span className="text-primary-500">*</span>
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          required
          value={data.phase1?.companyName || ''}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-black/40 border border-neutral-700 rounded-lg focus:outline-none focus:border-secondary-500 text-white text-sm"
          placeholder="Enter your company name"
        />
      </div>

      <div>
        <label htmlFor="industry" className="block text-sm font-medium text-neutral-300 mb-2">
          Your Industry <span className="text-primary-500">*</span>
        </label>
        <select
          id="industry"
          name="industry"
          required
          value={data.phase1?.industry || ''}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-black/40 border border-neutral-700 rounded-lg focus:outline-none focus:border-secondary-500 text-white text-sm"
        >
          <option value="" disabled>Select your industry</option>
          {INDUSTRIES.map((industry) => (
            <option key={industry} value={industry}>{industry}</option>
          ))}
        </select>
      </div>

      <h3 className="text-lg font-semibold text-white pt-4">Contact Information</h3>

      <div>
        <label htmlFor="contactName" className="block text-sm font-medium text-neutral-300 mb-2">
          Full Name <span className="text-primary-500">*</span>
        </label>
        <input
          type="text"
          id="contactName"
          name="contactName"
          required
          value={data.phase1?.contactName || ''}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-black/40 border border-neutral-700 rounded-lg focus:outline-none focus:border-secondary-500 text-white text-sm"
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label htmlFor="contactEmail" className="block text-sm font-medium text-neutral-300 mb-2">
          Email Address <span className="text-primary-500">*</span>
        </label>
        <input
          type="email"
          id="contactEmail"
          name="contactEmail"
          required
          value={data.phase1?.contactEmail || ''}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-black/40 border border-neutral-700 rounded-lg focus:outline-none focus:border-secondary-500 text-white text-sm"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label htmlFor="contactPhone" className="block text-sm font-medium text-neutral-300 mb-2">
          Phone Number <span className="text-neutral-500">(Optional)</span>
        </label>
        <input
          type="tel"
          id="contactPhone"
          name="contactPhone"
          value={data.phase1?.contactPhone || ''}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-black/40 border border-neutral-700 rounded-lg focus:outline-none focus:border-secondary-500 text-white text-sm"
          placeholder="Enter your phone number"
        />
      </div>
    </div>
  );
}
