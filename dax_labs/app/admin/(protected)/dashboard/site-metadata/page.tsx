'use client';

import { useState, useEffect } from 'react';
import { siteMetadata } from '@/app/data/site-metadata';
import type { SiteMetadata, StatItem, CertItem } from '@/app/data/site-metadata';
import AdminHeader from '@/app/admin/components/AdminHeader';
import SaveBar from '@/app/admin/components/SaveBar';
import ArrayEditor from '@/app/admin/components/ArrayEditor';
import { broadcastContentUpdate } from '@/app/data/useContentData';

const FILE_PATH = 'dax_labs/app/data/content/site-metadata.json';

export default function EditSiteMetadata() {
  const [data, setData] = useState<SiteMetadata>(() => siteMetadata);
  const [initialJson, setInitialJson] = useState<string>('');
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<'idle' | 'saved' | 'error'>('idle');
  const [statusMsg, setStatusMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    async function loadFresh() {
      try {
        const res = await fetch('/api/admin/content?file=site-metadata');
        if (res.ok) {
          const json = await res.json();
          if (json.data && Array.isArray(json.data.statistics)) {
            setData(json.data);
            setInitialJson(JSON.stringify(json.data));
            return;
          }
        }
      } catch {
        // fallback
      }
      setInitialJson(JSON.stringify(siteMetadata));
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
      const githubToken =
        typeof window !== 'undefined' ? localStorage.getItem('dak_github_pat') || undefined : undefined;

      const res = await fetch('/api/admin/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filePath: FILE_PATH, content, githubToken }),
      });

      const resData = await res.json();
      if (!res.ok) {
        throw new Error(resData.error || 'Failed to save changes');
      }

      broadcastContentUpdate(FILE_PATH.split('/').pop() || 'site-metadata.json', content);

      setInitialJson(JSON.stringify(data));
      setStatus('saved');
      setStatusMsg(resData.message || 'Trust indicators saved successfully!');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Unknown error occurred');
    } finally {
      setSaving(false);
    }
  }

  function handleDiscard() {
    if (confirm('Discard changes to trust indicators?')) {
      if (initialJson) {
        setData(JSON.parse(initialJson));
      }
      setStatus('idle');
    }
  }

  function updateStat(index: number, field: keyof StatItem, value: any) {
    const updated = [...data.statistics];
    updated[index] = { ...updated[index], [field]: value };
    setData({ ...data, statistics: updated });
  }

  function addStat() {
    setData({
      ...data,
      statistics: [...data.statistics, { value: 100, suffix: '+', label: 'Metric Label' }],
    });
  }

  function removeStat(index: number) {
    setData({
      ...data,
      statistics: data.statistics.filter((_, i) => i !== index),
    });
  }

  function updateCert(index: number, field: keyof CertItem, value: any) {
    const updated = [...data.certifications];
    updated[index] = { ...updated[index], [field]: value };
    setData({ ...data, certifications: updated });
  }

  function addCert() {
    setData({
      ...data,
      certifications: [
        ...data.certifications,
        { title: 'New Certification', description: 'Certified standard or empanelment' },
      ],
    });
  }

  function removeCert(index: number) {
    setData({
      ...data,
      certifications: data.certifications.filter((_, i) => i !== index),
    });
  }

  return (
    <div className="min-h-screen bg-[#070e17] text-white pb-24">
      <AdminHeader
        title="Trust Indicators & Statistics"
        subtitle="Manage audited metrics, industry certifications, capability bullets, and critical sectors"
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
        {/* Statistics Counters */}
        <section className="bg-[rgba(12,22,34,0.85)] border border-white/10 rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#20d7b5]">
              Key Impact Metrics (Animated Counters)
            </h2>
            <button
              type="button"
              onClick={addStat}
              className="text-xs text-[#20d7b5] hover:underline"
            >
              + Add Metric
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.statistics.map((stat, idx) => (
              <div key={idx} className="p-3 bg-black/30 border border-white/10 rounded-lg space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-mono">Metric #{idx + 1}</span>
                  {data.statistics.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeStat(idx)}
                      className="text-xs text-red-400 hover:text-red-300"
                    >
                      ✕
                    </button>
                  )}
                </div>

                <div className="flex gap-2">
                  <input
                    type="number"
                    value={stat.value}
                    onChange={(e) => updateStat(idx, 'value', parseInt(e.target.value) || 0)}
                    placeholder="Value"
                    className="w-1/3 px-3 py-1.5 bg-white/5 border border-white/10 rounded text-white text-xs font-mono focus:outline-none focus:border-[#20d7b5]"
                  />
                  <input
                    type="text"
                    value={stat.suffix}
                    onChange={(e) => updateStat(idx, 'suffix', e.target.value)}
                    placeholder="Suffix (+, %, etc)"
                    className="w-1/4 px-3 py-1.5 bg-white/5 border border-white/10 rounded text-white text-xs focus:outline-none focus:border-[#20d7b5]"
                  />
                  <input
                    type="text"
                    value={stat.label}
                    onChange={(e) => updateStat(idx, 'label', e.target.value)}
                    placeholder="Label (e.g. Clients Protected)"
                    className="flex-1 px-3 py-1.5 bg-white/5 border border-white/10 rounded text-white text-xs focus:outline-none focus:border-[#20d7b5]"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience and Capability (Section 6 from Update PDF) */}
        <section className="bg-[rgba(12,22,34,0.85)] border border-white/10 rounded-xl p-6 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#20d7b5]">
            Certified Expertise & Capabilities
          </h2>
          <ArrayEditor
            label="Certified Expertise (Block 1)"
            items={data.expertise}
            onChange={(items) => setData({ ...data, expertise: items })}
            placeholder="e.g. CISSP, CISM, ISO 27001 standards..."
          />
        </section>

        {/* Critical Sectors */}
        <section className="bg-[rgba(12,22,34,0.85)] border border-white/10 rounded-xl p-6 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#20d7b5]">
            Critical Sectors & Environments
          </h2>
          <ArrayEditor
            label="Applicable Critical Sectors (Block 2)"
            items={data.sectors}
            onChange={(items) => setData({ ...data, sectors: items })}
            placeholder="e.g. Defence, law enforcement, banking..."
          />
        </section>

        {/* Certifications and Badges */}
        <section className="bg-[rgba(12,22,34,0.85)] border border-white/10 rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#20d7b5]">
              Empanelments & Compliance Badges
            </h2>
            <button
              type="button"
              onClick={addCert}
              className="text-xs text-[#20d7b5] hover:underline"
            >
              + Add Badge
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.certifications.map((cert, idx) => (
              <div key={idx} className="p-3 bg-black/30 border border-white/10 rounded-lg space-y-2">
                <div className="flex items-center justify-between">
                  <input
                    type="text"
                    value={cert.title}
                    onChange={(e) => updateCert(idx, 'title', e.target.value)}
                    placeholder="Badge Title (e.g. CERT-In Empanelled)"
                    className="flex-1 px-2.5 py-1 bg-white/5 border border-white/10 rounded text-white text-xs font-semibold focus:outline-none focus:border-[#20d7b5]"
                  />
                  <button
                    type="button"
                    onClick={() => removeCert(idx)}
                    className="ml-2 text-xs text-red-400 hover:text-red-300"
                  >
                    ✕
                  </button>
                </div>
                <input
                  type="text"
                  value={cert.description}
                  onChange={(e) => updateCert(idx, 'description', e.target.value)}
                  placeholder="Short description..."
                  className="w-full px-2.5 py-1 bg-white/5 border border-white/10 rounded text-white text-xs focus:outline-none focus:border-[#20d7b5]"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
