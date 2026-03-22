'use client';

import { useState } from 'react';

const productOptions = [
  'Web Application Firewall (WAF)',
  'DDoS Mitigation Solution',
  'SSL VPN',
  'DNS Firewall',
  'SIEM (Security Information & Event Management)',
  'Email Security',
  'Data Loss Prevention (DLP)',
  'Endpoint Detection and Response (EDR/XDR)',
  'Network Security Scanners',
  'Patch Management',
  'Network Monitoring',
  'Log Management',
  'Forensic Workstation',
  'Password Cracking Machine',
  'Mobile Forensic Tools',
  'Computer Forensic Tools',
  'Other (please specify)',
];

const companySizeOptions = [
  '1-10 employees',
  '11-50 employees',
  '51-200 employees',
  '201-500 employees',
  '501-1000 employees',
  '1000+ employees',
];

const timelineOptions = [
  'Immediate (within 1 week)',
  'Soon (1-4 weeks)',
  'Planning (1-3 months)',
  'Researching (3+ months)',
];

const budgetOptions = [
  'Under ₹5 lakhs',
  '₹5-10 lakhs',
  '₹10-25 lakhs',
  '₹25-50 lakhs',
  '₹50 lakhs - 1 crore',
  'Above 1 crore',
];

type FormType = 'demo' | 'quote' | 'sales';

export default function ProductInquiryForm({ formType = 'demo' }: { formType?: FormType }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    companySize: '',
    timeline: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const getFormTitle = () => {
    switch (formType) {
      case 'demo':
        return 'Request Product Demo';
      case 'quote':
        return 'Get a Quote';
      case 'sales':
        return 'Talk to Sales';
      default:
        return 'Request Product Demo';
    }
  };

  const getFormDescription = () => {
    switch (formType) {
      case 'demo':
        return 'Schedule a personalized demo with our product experts to see our solutions in action.';
      case 'quote':
        return 'Get a customized quote tailored to your organization\'s security requirements.';
      case 'sales':
        return 'Connect with our sales team to discuss your security needs and find the right solutions.';
      default:
        return '';
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    if (formType === 'quote' && !formData.phone.trim()) {
      newErrors.phone = 'Phone number is required for quotes';
    }

    if (!formData.product.trim()) {
      newErrors.product = 'Please select a product';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // In production, this would send to an API endpoint
      console.log('Form submitted:', formData);
      setSubmitted(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  if (submitted) {
    return (
      <div className="p-8 bg-[var(--color-bg-primary)] rounded-lg border border-[var(--color-border)] text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-accent)] rounded-full text-[var(--color-text-light)] mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">
          Thank You!
        </h3>
        <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
          Your {formType === 'demo' ? 'demo request' : formType === 'quote' ? 'quote request' : 'inquiry'} has been submitted successfully.
        </p>
        <p className="mt-2 text-[var(--color-text-secondary)]">
          Our team will contact you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 bg-[var(--color-bg-primary)] rounded-lg border border-[var(--color-border)]">
      {/* Form Header */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
          {getFormTitle()}
        </h3>
        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
          {getFormDescription()}
        </p>
      </div>

      {/* Form Fields */}
      <div className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-[var(--color-bg-secondary)] border ${
              errors.name ? 'border-red-500' : 'border-[var(--color-border)]'
            } rounded-md text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-colors`}
            placeholder="John Doe"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-[var(--color-bg-secondary)] border ${
              errors.email ? 'border-red-500' : 'border-[var(--color-border)]'
            } rounded-md text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-colors`}
            placeholder="john@company.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">
            Company Name *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-[var(--color-bg-secondary)] border ${
              errors.company ? 'border-red-500' : 'border-[var(--color-border)]'
            } rounded-md text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-colors`}
            placeholder="Acme Corporation"
          />
          {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">
            Phone Number {formType === 'quote' ? '*' : '(Optional)'}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-[var(--color-bg-secondary)] border ${
              errors.phone ? 'border-red-500' : 'border-[var(--color-border)]'
            } rounded-md text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-colors`}
            placeholder="+91 98765 43210"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
        </div>

        {/* Product Interest */}
        <div>
          <label htmlFor="product" className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">
            Product Interest *
          </label>
          <select
            id="product"
            name="product"
            value={formData.product}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-[var(--color-bg-secondary)] border ${
              errors.product ? 'border-red-500' : 'border-[var(--color-border)]'
            } rounded-md text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-colors`}
          >
            <option value="">Select a product</option>
            {productOptions.map((product) => (
              <option key={product} value={product}>
                {product}
              </option>
            ))}
          </select>
          {errors.product && <p className="mt-1 text-sm text-red-500">{errors.product}</p>}
        </div>

        {/* Company Size */}
        <div>
          <label htmlFor="companySize" className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">
            Company Size
          </label>
          <select
            id="companySize"
            name="companySize"
            value={formData.companySize}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-md text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-colors"
          >
            <option value="">Select company size</option>
            {companySizeOptions.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        {/* Timeline */}
        <div>
          <label htmlFor="timeline" className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">
            Purchase Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-md text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-colors"
          >
            <option value="">Select timeline</option>
            {timelineOptions.map((timeline) => (
              <option key={timeline} value={timeline}>
                {timeline}
              </option>
            ))}
          </select>
        </div>

        {/* Budget (for quote form) */}
        {formType === 'quote' && (
          <div>
            <label htmlFor="budget" className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">
              Budget Range
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-md text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-colors"
            >
              <option value="">Select budget range</option>
              {budgetOptions.map((budget) => (
                <option key={budget} value={budget}>
                  {budget}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">
            Additional Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-md text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-colors resize-none"
            placeholder="Tell us more about your requirements..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-8 py-4 text-base font-semibold text-[var(--color-text-light)] bg-[var(--color-accent)] rounded-md hover:bg-[var(--color-accent-hover)] transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
        >
          {formType === 'demo' ? 'Request Demo' : formType === 'quote' ? 'Get Quote' : 'Contact Sales'}
        </button>

        {/* Privacy Notice */}
        <p className="text-xs text-[var(--color-text-muted)] text-center">
          By submitting this form, you agree to our{' '}
          <a href="/privacy" className="text-[var(--color-accent)] hover:underline">
            Privacy Policy
          </a>
          . We&apos;ll never share your information with third parties.
        </p>
      </div>
    </form>
  );
}
