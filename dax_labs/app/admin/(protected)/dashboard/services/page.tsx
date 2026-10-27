'use client';

import { useState, useEffect } from 'react';
import { servicesContent } from '@/app/data/services-content';
import type { ServicesContent, FrameworkPillar, ServiceCategory } from '@/app/data/services-content';
import AdminHeader from '@/app/admin/components/AdminHeader';
import SaveBar from '@/app/admin/components/SaveBar';
import ArrayEditor from '@/app/admin/components/ArrayEditor';
import PairListEditor from '@/app/admin/components/PairListEditor';

const FILE_PATH = 'dax_labs/app/data/content/services-content.json';

export default function EditServices() {
  const [data, setData] = useState<ServicesContent>(() => servicesContent);
  const [initialJson, setInitialJson] = useState<string>('');
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<'idle' | 'saved' | 'error'>('idle');
  const [statusMsg, setStatusMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    async function loadFresh() {
      try {
        const res = await fetch('/api/admin/content?file=services-content');
        if (res.ok) {
          const json = await res.json();
          if (json.data && Array.isArray(json.data.framework)) {
            setData(json.data);
            setInitialJson(JSON.stringify(json.data));
            return;
          }
        }
      } catch {
        // fallback
      }
      setInitialJson(JSON.stringify(servicesContent));
    }
    loadFresh();
  }, []);

  const hasChanges = initialJson !== '' && initialJson !== JSON.stringify(data);

  async function handleSave() {
    setSaving(true);
    setStatus('idle');
    setErrorMsg('');
    setStatusMsg('');

    try {
      const content = JSON.stringify(data, null, 2);
      const res = await fetch('/api/admin/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filePath: FILE_PATH, content }),
      });

      const resData = await res.json();
      if (!res.ok) {
        throw new Error(resData.error || 'Failed to save changes');
      }

      setInitialJson(JSON.stringify(data));
      setStatus('saved');
      setStatusMsg(resData.message || 'Services content saved successfully!');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Unknown error occurred');
    } finally {
      setSaving(false);
    }
  }

  function handleDiscard() {
    if (confirm('Discard changes to services content?')) {
      if (initialJson) {
        setData(JSON.parse(initialJson));
      }
      setStatus('idle');
    }
  }

  function updatePillar(index: number, field: keyof FrameworkPillar, value: any) {
    const updated = [...data.framework];
    updated[index] = { ...updated[index], [field]: value };
    setData({ ...data, framework: updated });
  }

  function updateCategory(index: number, field: keyof ServiceCategory, value: any) {
    const updated = [...data.categories];
    updated[index] = { ...updated[index], [field]: value };
    setData({ ...data, categories: updated });
  }

  function addCategory() {
    const newCat: ServiceCategory = {
      id: `service-${Date.now().toString().slice(-4)}`,
      title: 'New Security Service',
      description: 'Comprehensive risk mitigation and technical auditing.',
      subServices: [
        { title: 'Core Assessment', description: 'Detailed baseline inspection and audit.' },
      ],
      benefits: ['Heightened posture', 'Compliance assurance'],
    };
    setData({ ...data, categories: [...data.categories, newCat] });
  }

  function removeCategory(index: number) {
    setData({
      ...data,
      categories: data.categories.filter((_, i) => i !== index),
    });
  }

  return (
    <div className="min-h-screen bg-[#070e17] text-white pb-24">
      <AdminHeader
        title="Services & Methodology"
        subtitle="Manage the 3 pillars (Detect, Analyze, Kinetic) and specialized cybersecurity service offerings"
      />

      <SaveBar
        onSave={handleSave}
        onReset={handleDiscard}
        saving={saving}
        hasChanges={hasChanges}
        status={status}
        errorMessage={errorMsg}
        statusMessage={statusMsg}
      />

      <main className="max-w-4xl mx-auto px-6 space-y-8">
        {/* Page Header */}
        <section className="bg-[rgba(12,22,34,0.85)] border border-white/10 rounded-xl p-6 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#20d7b5]">
            Services Page Intro
          </h2>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
              Page Title
            </label>
            <input
              type="text"
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#20d7b5] text-xs font-medium"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
              Opening Statement
            </label>
            <textarea
              rows={2}
              value={data.openingLine}
              onChange={(e) => setData({ ...data, openingLine: e.target.value })}
              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#20d7b5] text-xs"
            />
          </div>
        </section>

        {/* 3 Pillars: Detect, Analyze, Kinetic */}
        <section className="bg-[rgba(12,22,34,0.85)] border border-white/10 rounded-xl p-6 space-y-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#20d7b5]">
            Security Framework Pillars (Detect, Analyze, Kinetic)
          </h2>

          <div className="space-y-6">
            {data.framework.map((pillar, idx) => (
              <div key={pillar.key} className="p-4 bg-black/30 border border-white/10 rounded-xl space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#20d7b5]" />
                  <h3 className="text-sm font-bold text-white tracking-wider">{pillar.name}</h3>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                    Heading
                  </label>
                  <input
                    type="text"
                    value={pillar.heading}
                    onChange={(e) => updatePillar(idx, 'heading', e.target.value)}
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#20d7b5] text-xs font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                    Description
                  </label>
                  <textarea
                    rows={2}
                    value={pillar.description}
                    onChange={(e) => updatePillar(idx, 'description', e.target.value)}
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#20d7b5] text-xs"
                  />
                </div>

                <ArrayEditor
                  label={`${pillar.name} Focus Areas`}
                  items={pillar.items}
                  onChange={(items) => updatePillar(idx, 'items', items)}
                  placeholder="Focus area (e.g. System configurations)..."
                />
              </div>
            ))}
          </div>
        </section>

        {/* Specialized Service Categories */}
        <section className="bg-[rgba(12,22,34,0.85)] border border-white/10 rounded-xl p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#20d7b5]">
              Detailed Service Categories
            </h2>
            <button
              type="button"
              onClick={addCategory}
              className="text-xs text-[#20d7b5] hover:underline"
            >
              + Add Category
            </button>
          </div>

          <div className="space-y-6">
            {data.categories.map((cat, idx) => (
              <div key={cat.id} className="p-4 bg-black/30 border border-white/10 rounded-xl space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-white">#{idx + 1}. {cat.title}</h3>
                  <button
                    type="button"
                    onClick={() => removeCategory(idx)}
                    className="text-xs text-red-400 hover:text-red-300"
                  >
                    ✕ Remove
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                      Service Title
                    </label>
                    <input
                      type="text"
                      value={cat.title}
                      onChange={(e) => updateCategory(idx, 'title', e.target.value)}
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#20d7b5] text-xs font-semibold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                      Service ID / Slug
                    </label>
                    <input
                      type="text"
                      value={cat.id}
                      onChange={(e) => updateCategory(idx, 'id', e.target.value)}
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white font-mono focus:outline-none focus:border-[#20d7b5] text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                    Description
                  </label>
                  <textarea
                    rows={2}
                    value={cat.description}
                    onChange={(e) => updateCategory(idx, 'description', e.target.value)}
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#20d7b5] text-xs"
                  />
                </div>

                <PairListEditor
                  label="Sub-Services & Deliverables"
                  items={cat.subServices}
                  onChange={(sub) => updateCategory(idx, 'subServices', sub)}
                  titlePlaceholder="Sub-service title"
                  descPlaceholder="Scope and methodology description..."
                />

                <ArrayEditor
                  label="Service Benefits"
                  items={cat.benefits}
                  onChange={(benefits) => updateCategory(idx, 'benefits', benefits)}
                  placeholder="Benefit bullet point..."
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
