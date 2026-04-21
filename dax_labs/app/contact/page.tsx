'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const domainOptions = [
  'Government / Public Sector',
  'Defence / Law Enforcement',
  'Banking / Financial Services',
  'Healthcare',
  'Enterprise / Corporate',
  'Industrial / Infrastructure',
  'Technology / IT',
  'Other',
];

const interestOptions = [
  'Security Services',
  'Security Products',
  'Training',
  'Other',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    domain: '',
    interest: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out. We will get back to you shortly.');
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[var(--color-bg-primary)] pt-24 pb-16 transition-colors duration-300">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-10">
          <div className="border-b border-[var(--color-border)] pb-8 sm:pb-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Contact Us
            </h1>
          </div>

          <section className="border-b border-[var(--color-border)] py-10 sm:py-12">
            <p className="max-w-4xl text-lg font-semibold leading-relaxed text-[var(--color-text-primary)]">
              All communication is handled with confidentiality and professional discretion.
              <br className="hidden sm:block" />
              The more accurate information you provide, the faster we can understand and assist your requirement.
            </p>
          </section>

          <section className="border-b border-[var(--color-border)] py-10 sm:py-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)]">
              Contact Details
            </h2>

            <div className="mt-8 space-y-8 text-[var(--color-text-primary)]">
              <div>
                <p className="text-2xl font-semibold">Email</p>
                <a
                  href="mailto:info@daksecurity.com"
                  className="mt-2 inline-block text-xl sm:text-2xl font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
                >
                  info@daksecurity.com
                </a>
              </div>

              <div>
                <p className="text-2xl font-semibold">Phone</p>
                <a
                  href="tel:+919604551338"
                  className="mt-2 inline-block text-xl sm:text-2xl font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
                >
                  +91 9604551338
                </a>
              </div>

              <div>
                <p className="text-2xl font-semibold">Address</p>
                <address className="mt-2 not-italic text-xl sm:text-2xl font-semibold leading-relaxed text-[var(--color-text-primary)]">
                  20, H-1/A, Sector 63
                  <br />
                  Noida - 201301
                  <br />
                  Uttar Pradesh, India
                </address>
              </div>
            </div>
          </section>

          <section className="py-10 sm:py-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)]">
                Let&apos;s Discuss
              </h2>

              <form onSubmit={handleSubmit} className="mt-10 space-y-5">
                {/* Name / Organisation */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                    Name / Organisation
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-md text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                    placeholder="Your name or organisation"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-md text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-md text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>

                {/* Location (Mandatory) */}
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                    Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-md text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                    placeholder="Your city/country"
                    required
                  />
                </div>

                {/* Domain / Category (Optional Dropdown) */}
                <div>
                  <label htmlFor="domain" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                    Domain / Category <span className="text-[var(--color-text-muted)] font-normal">(Optional)</span>
                  </label>
                  <select
                    id="domain"
                    name="domain"
                    value={formData.domain}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-md text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                  >
                    <option value="">Select domain</option>
                    {domainOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Interested In (Optional Dropdown) */}
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                    Interested In <span className="text-[var(--color-text-muted)] font-normal">(Optional)</span>
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-md text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                  >
                    <option value="">Select interest</option>
                    {interestOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-md text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
                    placeholder="Briefly describe what you need help with"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-8 py-4 text-base font-semibold text-[var(--color-text-light)] bg-[var(--color-accent)] rounded-md hover:bg-[var(--color-accent-hover)] transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
                >
                  Send
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
