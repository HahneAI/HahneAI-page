import { PhaseProps } from './types';
import { INDUSTRIES } from './constants';

/**
 * Phase 1 - Contact Information
 *
 * Design: Clean inputs with generous spacing
 */
export function Phase1({ data, updateData }: PhaseProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    updateData({
      phase1: {
        ...data.phase1,
        [e.target.name]: e.target.value,
      },
    });
  };

  const inputClasses = "w-full px-4 py-4 bg-transparent border border-neutral-700 rounded-lg focus:outline-none focus:border-white text-white placeholder:text-neutral-600 transition-colors";
  const labelClasses = "block text-sm text-neutral-400 mb-2";

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-light text-white mb-2">Tell us about yourself</h2>
        <p className="text-neutral-500">We'll use this to personalize your experience.</p>
      </div>

      <div className="space-y-6">
        <div>
          <label htmlFor="companyName" className={labelClasses}>
            Company name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            required
            value={data.phase1?.companyName || ''}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Acme Inc."
          />
        </div>

        <div>
          <label htmlFor="industry" className={labelClasses}>
            Industry
          </label>
          <select
            id="industry"
            name="industry"
            required
            value={data.phase1?.industry || ''}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="" disabled>Select your industry</option>
            {INDUSTRIES.map((industry) => (
              <option key={industry} value={industry}>{industry}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="pt-4 border-t border-neutral-800">
        <h3 className="text-lg font-light text-white mb-6">Contact details</h3>

        <div className="space-y-6">
          <div>
            <label htmlFor="contactName" className={labelClasses}>
              Your name
            </label>
            <input
              type="text"
              id="contactName"
              name="contactName"
              required
              value={data.phase1?.contactName || ''}
              onChange={handleChange}
              className={inputClasses}
              placeholder="Jane Smith"
            />
          </div>

          <div>
            <label htmlFor="contactEmail" className={labelClasses}>
              Email address
            </label>
            <input
              type="email"
              id="contactEmail"
              name="contactEmail"
              required
              value={data.phase1?.contactEmail || ''}
              onChange={handleChange}
              className={inputClasses}
              placeholder="jane@acme.com"
            />
          </div>

          <div>
            <label htmlFor="contactPhone" className={labelClasses}>
              Phone <span className="text-neutral-600">(optional)</span>
            </label>
            <input
              type="tel"
              id="contactPhone"
              name="contactPhone"
              value={data.phase1?.contactPhone || ''}
              onChange={handleChange}
              className={inputClasses}
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
