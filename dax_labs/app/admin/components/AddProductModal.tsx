'use client';

import { useState, FormEvent, useEffect, useRef } from 'react';

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (newProduct: {
    slug: string;
    name: string;
    shortDescription: string;
    fullDescription: string;
    iconKey?: string;
    category?: string;
    features: string[];
    specifications: { label: string; value: string }[];
    useCases?: { title: string; description: string }[];
    applications?: { title: string; description: string }[];
    benefits: string[];
    relatedProducts?: { name: string; href: string; description: string }[];
  }) => void;
  category: 'it-security' | 'digital-forensic' | 'forensic-software';
  existingSlugs?: string[];
}

const AVAILABLE_ICONS = [
  'waf',
  'ddos',
  'vpn',
  'siem',
  'dlp',
  'edr',
  'scanner',
  'log',
  'pentest',
  'code',
  'performance',
  'dns',
  'email',
  'patch',
];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export default function AddProductModal({
  isOpen,
  onClose,
  onAdd,
  category,
  existingSlugs = [],
}: AddProductModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [customSlug, setCustomSlug] = useState(false);
  const [shortDescription, setShortDescription] = useState('');
  const [fullDescription, setFullDescription] = useState('');
  const [iconKey, setIconKey] = useState(AVAILABLE_ICONS[0]);
  const [error, setError] = useState('');

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
      setName('');
      setSlug('');
      setCustomSlug(false);
      setShortDescription('');
      setFullDescription('');
      setError('');
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  function handleNameChange(val: string) {
    setName(val);
    if (!customSlug) {
      setSlug(slugify(val));
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');

    const trimmedSlug = slugify(slug || name);
    if (!name.trim()) {
      setError('Product name is required');
      return;
    }
    if (!trimmedSlug) {
      setError('A valid slug is required');
      return;
    }
    if (existingSlugs.includes(trimmedSlug)) {
      setError(`A product with slug "${trimmedSlug}" already exists. Please choose a unique slug.`);
      return;
    }

    onAdd({
      slug: trimmedSlug,
      name: name.trim(),
      shortDescription: shortDescription.trim() || `${name.trim()} security solution by DAK Security Labs.`,
      fullDescription: fullDescription.trim() || `${name.trim()} delivers robust defense, compliance, and real-time oversight for critical enterprise infrastructures.`,
      iconKey,
      category,
      features: ['Real-time threat monitoring and alert dispatch', 'Seamless API integration and deployment'],
      specifications: [
        { label: 'Deployment', value: 'Cloud, On-Premises, or Hybrid' },
        { label: 'Architecture', value: 'High Availability & Scalable' },
      ],
      useCases: [
        { title: 'Enterprise Defense', description: 'Comprehensive coverage across hybrid IT and critical assets.' },
      ],
      applications: [
        { title: 'Enterprise Operations', description: 'Mission-critical workflow protection.' },
      ],
      benefits: ['Mitigate operational vulnerabilities', 'Audit and compliance readiness'],
      relatedProducts: [],
    });

    onClose();
  }

  if (!isOpen) return null;

  return (
    <dialog
      ref={dialogRef}
      className="backdrop:bg-black/80 backdrop:backdrop-blur-sm bg-transparent p-0 m-auto max-w-xl w-full border-0 focus:outline-none"
    >
      <div className="bg-[#0b141e] border border-white/20 rounded-2xl p-6 shadow-2xl text-white max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <h3 className="text-lg font-bold text-white tracking-tight">Add New Item</h3>
            <p className="text-xs text-gray-400 mt-0.5">Category: {category}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-white text-lg leading-none"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
              Product / Tool Name <span className="text-[#20d7b5]">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => handleNameChange(e.target.value)}
              placeholder="e.g. Next-Generation Cloud Firewall"
              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#20d7b5] text-sm"
              required
              autoFocus
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
              URL Slug <span className="text-[#20d7b5]">*</span>
            </label>
            <input
              type="text"
              value={slug}
              onChange={(e) => {
                setCustomSlug(true);
                setSlug(e.target.value);
              }}
              placeholder="e.g. next-generation-cloud-firewall"
              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white font-mono placeholder-gray-500 focus:outline-none focus:border-[#20d7b5] text-xs"
              required
            />
            <p className="text-[11px] text-gray-500 mt-1">
              Page will be accessible at: <code className="text-gray-400">/products/{category}/{slug || '[slug]'}</code>
            </p>
          </div>

          {category !== 'forensic-software' && (
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                Icon Key
              </label>
              <select
                value={iconKey}
                onChange={(e) => setIconKey(e.target.value)}
                className="w-full px-3 py-2 bg-[#08121d] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#20d7b5] text-xs"
              >
                {AVAILABLE_ICONS.map((icon) => (
                  <option key={icon} value={icon}>
                    {icon.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
              Short Description
            </label>
            <textarea
              rows={2}
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              placeholder="1-2 sentences summarizing value proposition..."
              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#20d7b5] text-xs"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
              Full Description Overview
            </label>
            <textarea
              rows={4}
              value={fullDescription}
              onChange={(e) => setFullDescription(e.target.value)}
              placeholder="Comprehensive architectural overview..."
              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#20d7b5] text-xs font-mono"
            />
          </div>

          {error && (
            <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-xs">
              {error}
            </div>
          )}

          <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-[#20d7b5] text-[#070d14] hover:bg-[#17b89b] text-xs font-semibold transition-colors"
            >
              Add to Catalog
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
