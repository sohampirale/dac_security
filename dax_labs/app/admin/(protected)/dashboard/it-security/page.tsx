'use client';

import { useState } from 'react';
import { itSecurityProducts } from '@/app/data/it-security-products';
import type { ProductData } from '@/app/data/it-security-products';

const FILE_PATH = 'dax_labs/app/data/content/it-security-products.json';

type EditableProduct = Omit<ProductData, 'category'> & { category: string };

export default function EditITSecurity() {
  const [items, setItems] = useState<EditableProduct[]>(
    () => itSecurityProducts as EditableProduct[]
  );
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<'idle' | 'saved' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSave() {
    setSaving(true);
    setStatus('idle');
    setErrorMsg('');

    try {
      const content = JSON.stringify(items, null, 2);
      const res = await fetch('/api/admin/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filePath: FILE_PATH, content }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to save');
      }

      setStatus('saved');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setSaving(false);
    }
  }

  function updateItem(index: number, field: keyof EditableProduct, value: unknown) {
    setItems((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  }

  function addArrayItem(index: number, field: 'features' | 'benefits') {
    setItems((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: [...next[index][field], ''] };
      return next;
    });
  }

  function removeArrayItem(index: number, field: 'features' | 'benefits', itemIndex: number) {
    setItems((prev) => {
      const next = [...prev];
      next[index] = {
        ...next[index],
        [field]: next[index][field].filter((_, i) => i !== itemIndex),
      };
      return next;
    });
  }

  function updateArrayItem(index: number, field: 'features' | 'benefits', itemIndex: number, value: string) {
    setItems((prev) => {
      const next = [...prev];
      const arr = [...next[index][field]];
      arr[itemIndex] = value;
      next[index] = { ...next[index], [field]: arr };
      return next;
    });
  }

  function addSpec(index: number) {
    setItems((prev) => {
      const next = [...prev];
      next[index] = {
        ...next[index],
        specifications: [...next[index].specifications, { label: '', value: '' }],
      };
      return next;
    });
  }

  function removeSpec(index: number, specIndex: number) {
    setItems((prev) => {
      const next = [...prev];
      next[index] = {
        ...next[index],
        specifications: next[index].specifications.filter((_, i) => i !== specIndex),
      };
      return next;
    });
  }

  function updateSpec(index: number, specIndex: number, field: 'label' | 'value', val: string) {
    setItems((prev) => {
      const next = [...prev];
      const specs = [...next[index].specifications];
      specs[specIndex] = { ...specs[specIndex], [field]: val };
      next[index] = { ...next[index], specifications: specs };
      return next;
    });
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">IT Security Products</h1>
            <p className="text-gray-400 text-sm mt-1">{items.length} products</p>
          </div>
          <SaveButton onSave={handleSave} saving={saving} status={status} />
        </div>

        {status === 'saved' && (
          <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm">
            Changes saved! Vercel will redeploy automatically.
          </div>
        )}
        {status === 'error' && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
            Error: {errorMsg}
          </div>
        )}

        <div className="space-y-6">
          {items.map((item, idx) => (
            <details key={item.slug} className="bg-white/5 rounded-lg overflow-hidden group">
              <summary className="px-6 py-4 cursor-pointer hover:bg-white/5 transition-colors font-semibold flex items-center gap-3">
                <span className="text-gray-400 text-sm">{idx + 1}.</span>
                {item.name}
                <span className="text-xs text-gray-500 ml-auto opacity-0 group-open:opacity-100 transition-opacity">
                  editing...
                </span>
              </summary>

              <div className="px-6 pb-6 space-y-4 border-t border-white/10 pt-4">
                <Field label="Slug (read-only)">
                  <input type="text" value={item.slug} disabled className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded text-gray-500 cursor-not-allowed" />
                </Field>

                <Field label="Name">
                  <input type="text" value={item.name} onChange={(e) => updateItem(idx, 'name', e.target.value)} className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:border-[var(--color-accent)]" />
                </Field>

                <Field label="Short Description">
                  <textarea rows={2} value={item.shortDescription} onChange={(e) => updateItem(idx, 'shortDescription', e.target.value)} className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:border-[var(--color-accent)]" />
                </Field>

                <Field label="Full Description">
                  <textarea rows={6} value={item.fullDescription} onChange={(e) => updateItem(idx, 'fullDescription', e.target.value)} className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:border-[var(--color-accent)] font-mono text-xs" />
                </Field>

                <Field label="Icon Key">
                  <input type="text" value={item.iconKey} onChange={(e) => updateItem(idx, 'iconKey', e.target.value)} className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:border-[var(--color-accent)]" />
                </Field>

                <Field label="Category">
                  <select value={item.category} onChange={(e) => updateItem(idx, 'category', e.target.value)} className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:border-[var(--color-accent)] text-white">
                    <option value="it-security">IT Security</option>
                    <option value="digital-forensic">Digital Forensic</option>
                    <option value="forensic-software">Forensic Software</option>
                  </select>
                </Field>

                <ArrayField
                  label="Features"
                  items={item.features}
                  onAdd={() => addArrayItem(idx, 'features')}
                  onRemove={(i) => removeArrayItem(idx, 'features', i)}
                  onChange={(i, v) => updateArrayItem(idx, 'features', i, v)}
                />

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Specifications</label>
                  {item.specifications.map((spec, si) => (
                    <div key={si} className="flex gap-2 mb-2 items-start">
                      <input type="text" placeholder="Label" value={spec.label} onChange={(e) => updateSpec(idx, si, 'label', e.target.value)} className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:border-[var(--color-accent)] text-sm" />
                      <input type="text" placeholder="Value" value={spec.value} onChange={(e) => updateSpec(idx, si, 'value', e.target.value)} className="flex-[2] px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:border-[var(--color-accent)] text-sm" />
                      <button onClick={() => removeSpec(idx, si)} className="px-2 py-2 text-red-400 hover:text-red-300 text-sm">✕</button>
                    </div>
                  ))}
                  <button onClick={() => addSpec(idx)} className="text-sm text-[var(--color-accent)] hover:underline">+ Add specification</button>
                </div>

                <ArrayField
                  label="Benefits"
                  items={item.benefits}
                  onAdd={() => addArrayItem(idx, 'benefits')}
                  onRemove={(i) => removeArrayItem(idx, 'benefits', i)}
                  onChange={(i, v) => updateArrayItem(idx, 'benefits', i, v)}
                />

                <UseCasesField
                  useCases={item.useCases}
                  onChange={(newUseCases) => updateItem(idx, 'useCases', newUseCases)}
                />

                <RelatedProductsField
                  products={item.relatedProducts}
                  onChange={(newProducts) => updateItem(idx, 'relatedProducts', newProducts)}
                />
              </div>
            </details>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <SaveButton onSave={handleSave} saving={saving} status={status} />
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-400 mb-1.5">{label}</label>
      {children}
    </div>
  );
}

function ArrayField({ label, items, onAdd, onRemove, onChange }: {
  label: string;
  items: string[];
  onAdd: () => void;
  onRemove: (i: number) => void;
  onChange: (i: number, v: string) => void;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-400 mb-2">{label}</label>
      {items.map((item, i) => (
        <div key={i} className="flex gap-2 mb-2">
          <input type="text" value={item} onChange={(e) => onChange(i, e.target.value)} className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:border-[var(--color-accent)] text-sm" />
          <button onClick={() => onRemove(i)} className="px-2 py-2 text-red-400 hover:text-red-300 text-sm">✕</button>
        </div>
      ))}
      <button onClick={onAdd} className="text-sm text-[var(--color-accent)] hover:underline">+ Add {label.toLowerCase()}</button>
    </div>
  );
}

function UseCasesField({ useCases, onChange }: {
  useCases: { title: string; description: string }[];
  onChange: (items: { title: string; description: string }[]) => void;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-400 mb-2">Use Cases</label>
      {useCases.map((uc, i) => (
        <div key={i} className="flex gap-2 mb-2 items-start">
          <div className="flex-1 space-y-1">
            <input type="text" placeholder="Title" value={uc.title} onChange={(e) => {
              const next = [...useCases];
              next[i] = { ...next[i], title: e.target.value };
              onChange(next);
            }} className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:border-[var(--color-accent)] text-sm" />
            <input type="text" placeholder="Description" value={uc.description} onChange={(e) => {
              const next = [...useCases];
              next[i] = { ...next[i], description: e.target.value };
              onChange(next);
            }} className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:border-[var(--color-accent)] text-sm" />
          </div>
          <button onClick={() => onChange(useCases.filter((_, j) => j !== i))} className="px-2 py-2 text-red-400 hover:text-red-300 text-sm mt-1">✕</button>
        </div>
      ))}
      <button onClick={() => onChange([...useCases, { title: '', description: '' }])} className="text-sm text-[var(--color-accent)] hover:underline">+ Add use case</button>
    </div>
  );
}

function RelatedProductsField({ products, onChange }: {
  products: { name: string; href: string; description: string }[];
  onChange: (items: { name: string; href: string; description: string }[]) => void;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-400 mb-2">Related Products</label>
      {products.map((rp, i) => (
        <div key={i} className="flex gap-2 mb-2 items-start">
          <div className="flex-[3] space-y-1">
            <input type="text" placeholder="Name" value={rp.name} onChange={(e) => {
              const next = [...products];
              next[i] = { ...next[i], name: e.target.value };
              onChange(next);
            }} className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:border-[var(--color-accent)] text-sm" />
            <input type="text" placeholder="URL (e.g. /products/it-security/...)" value={rp.href} onChange={(e) => {
              const next = [...products];
              next[i] = { ...next[i], href: e.target.value };
              onChange(next);
            }} className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:border-[var(--color-accent)] text-sm" />
            <input type="text" placeholder="Description" value={rp.description} onChange={(e) => {
              const next = [...products];
              next[i] = { ...next[i], description: e.target.value };
              onChange(next);
            }} className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded focus:outline-none focus:border-[var(--color-accent)] text-sm" />
          </div>
          <button onClick={() => onChange(products.filter((_, j) => j !== i))} className="px-2 py-2 text-red-400 hover:text-red-300 text-sm mt-1">✕</button>
        </div>
      ))}
      <button onClick={() => onChange([...products, { name: '', href: '', description: '' }])} className="text-sm text-[var(--color-accent)] hover:underline">+ Add related product</button>
    </div>
  );
}

function SaveButton({ onSave, saving, status }: { onSave: () => void; saving: boolean; status: string }) {
  return (
    <button
      onClick={onSave}
      disabled={saving}
      className="px-6 py-2.5 bg-[var(--color-accent)] text-black font-semibold rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
    >
      {saving ? 'Saving...' : status === 'saved' ? 'Saved!' : 'Save All Changes'}
    </button>
  );
}
