'use client';

import { useState } from 'react';
import Header from '../components/Header';

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formElement = e.currentTarget;
      const payload = new FormData(formElement);
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: payload,
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      alert('Thank you for reaching out. We will get back to you shortly.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        domain: '',
        interest: '',
        message: '',
      });
      formElement.reset();
    } catch (error) {
      alert('Sorry, there was an issue sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[var(--color-bg-primary)] pt-20 pb-14 sm:pt-24 sm:pb-16 transition-colors duration-300">
        <div className="mx-auto max-w-5xl px-4 sm:px-8 lg:px-10">
          <div className="border-b border-[var(--color-border)] pb-6 sm:pb-10">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Contact Us
            </h1>
          </div>

          <section className="border-b border-[var(--color-border)] py-8 sm:py-12">
            <p className="max-w-4xl text-sm sm:text-lg font-semibold leading-relaxed text-[var(--color-text-primary)]">
              All communication is handled with confidentiality and professional discretion.
              <br className="hidden sm:block" />
              The more accurate information you provide, the faster we can understand and assist your requirement.
            </p>
          </section>

          <section className="py-8 sm:py-12">
            <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1fr_2fr] lg:items-start">
              <aside className="rounded-2xl border border-[var(--color-border)] bg-[rgba(8,17,26,0.65)] p-5 sm:p-8">
                <h2 className="text-2xl sm:text-4xl font-bold text-[var(--color-text-primary)]">Let&apos;s Discuss</h2>
                <p className="mt-4 text-sm uppercase tracking-[0.2em] text-[var(--color-accent)]">Email</p>
                <a href="mailto:info@daksecurity.com" className="mt-2 block text-lg text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-accent)]">info@daksecurity.com</a>
                <p className="mt-6 text-sm uppercase tracking-[0.2em] text-[var(--color-accent)]">Phone</p>
                <div className="mt-2 space-y-1 text-lg text-[var(--color-text-primary)]">
                  <a href="tel:+918668354806" className="block transition-colors hover:text-[var(--color-accent)]">+91 8668354806</a>
                  <a href="tel:+919604551338" className="block transition-colors hover:text-[var(--color-accent)]">+91 9604551338</a>
                </div>
                <p className="mt-6 text-sm uppercase tracking-[0.2em] text-[var(--color-accent)]">Head Office</p>
                <address className="mt-2 not-italic text-lg leading-snug text-[var(--color-text-primary)]">
                  <span className="block">20, H-1/A, Sector 63</span>
                  <span className="block">Noida - 201301</span>
                  <span className="block">Uttar Pradesh, India</span>
                </address>
                <p className="mt-6 text-sm uppercase tracking-[0.2em] text-[var(--color-accent)]">Branch Office</p>
                <address className="mt-2 not-italic text-lg leading-snug text-[var(--color-text-primary)]">
                  <span className="block">L & T Business Park</span>
                  <span className="block">Powai, Mumbai</span>
                  <span className="block">Maharashtra - 400076</span>
                </address>
              </aside>

              <div>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5" encType="multipart/form-data">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">Name / Organisation</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-md text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors" placeholder="Your name or organisation" required />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">Email</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-md text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors" placeholder="your@email.com" required />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">Phone Number</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-md text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors" placeholder="+91 XXXXXXXXXX" />
                    </div>

                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">Location <span className="text-red-500">*</span></label>
                      <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} className="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-md text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors" placeholder="Your city/country" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="domain" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">Domain / Category <span className="text-[var(--color-text-muted)] font-normal">(Optional)</span></label>
                      <select id="domain" name="domain" value={formData.domain} onChange={handleChange} className="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-md text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors">
                        <option value="">Select domain</option>
                        {domainOptions.map((option) => (<option key={option} value={option}>{option}</option>))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">Interested In <span className="text-[var(--color-text-muted)] font-normal">(Optional)</span></label>
                      <select id="interest" name="interest" value={formData.interest} onChange={handleChange} className="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-md text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors">
                        <option value="">Select interest</option>
                        {interestOptions.map((option) => (<option key={option} value={option}>{option}</option>))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-md text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none" placeholder="Briefly describe what you need help with" required />
                  </div>

                  <div>
                    <label htmlFor="requirements" className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">Your Requirements Document <span className="text-[var(--color-text-muted)] font-normal">(Optional)</span></label>
                    <input id="requirements" name="requirements" type="file" accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.txt" className="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-md text-[var(--color-text-primary)] file:mr-4 file:rounded-md file:border-0 file:bg-[var(--color-accent)] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-[var(--color-text-light)] hover:file:bg-[var(--color-accent-hover)] transition-colors" />
                  </div>

                  <button type="submit" disabled={isSubmitting} className="w-full px-8 py-4 text-base font-semibold text-[var(--color-text-light)] bg-[var(--color-accent)] rounded-md hover:bg-[var(--color-accent-hover)] transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:transform-none disabled:hover:shadow-none">
                    {isSubmitting ? 'Sending...' : 'Send'}
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
