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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-12 border-b border-[var(--color-border)] pb-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] tracking-tight">
              Contact Us
            </h1>
            <p className="mt-6 max-w-4xl text-lg font-semibold leading-relaxed text-[var(--color-text-primary)]">
              All communication is handled with confidentiality and professional discretion.
              The more accurate information you provide, the faster we can understand and assist your requirement.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Contact Details */}
            <div className="border-b border-[var(--color-border)] pb-10 lg:border-b-0 lg:pb-0">
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
                Contact Details
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-[var(--color-bg-secondary)] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-semibold text-[var(--color-text-primary)]">Email</p>
                    <a href="mailto:info@daksecurity.com" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">
                      info@daksecurity.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-[var(--color-bg-secondary)] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-semibold text-[var(--color-text-primary)]">Phone</p>
                    <a href="tel:+919604551338" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">
                      +91 9604551338
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-[var(--color-bg-secondary)] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-semibold text-[var(--color-text-primary)]">Address</p>
                    <p className="text-[var(--color-text-secondary)]">
                      20, H-1/A, Sector 63<br />
                      Noida - 201301<br />
                      Uttar Pradesh, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <h2 className="mb-6 border-b border-[var(--color-border)] pb-8 text-2xl font-bold text-[var(--color-text-primary)]">
                Let&apos;s Discuss
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
