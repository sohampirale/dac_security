'use client';

import { useState, useEffect } from 'react';
import { companyInfo } from '@/app/data/company-info';
import type { CompanyInfo } from '@/app/data/company-info';
import AdminHeader from '@/app/admin/components/AdminHeader';
import SaveBar from '@/app/admin/components/SaveBar';
import ArrayEditor from '@/app/admin/components/ArrayEditor';

const FILE_PATH = 'dax_labs/app/data/content/company-info.json';

export default function EditCompanyInfo() {
  const [data, setData] = useState<CompanyInfo>(() => companyInfo);
  const [initialJson, setInitialJson] = useState<string>('');
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<'idle' | 'saved' | 'error'>('idle');
  const [statusMsg, setStatusMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    async function loadFresh() {
      try {
        const res = await fetch('/api/admin/content?file=company-info');
        if (res.ok) {
          const json = await res.json();
          if (json.data && json.data.companyName) {
            setData(json.data);
            setInitialJson(JSON.stringify(json.data));
            return;
          }
        }
      } catch {
        // fallback
      }
      setInitialJson(JSON.stringify(companyInfo));
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

      if (typeof window !== 'undefined') {
        localStorage.setItem(`dak_content_override_${FILE_PATH.split('/').pop()}`, content);
      }

      setInitialJson(JSON.stringify(data));
      setStatus('saved');
      setStatusMsg(resData.message || 'Company information saved successfully!');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Unknown error occurred');
    } finally {
      setSaving(false);
    }
  }

  function handleDiscard() {
    if (confirm('Discard changes to company details?')) {
      if (initialJson) {
        setData(JSON.parse(initialJson));
      }
      setStatus('idle');
    }
  }

  function updateOffice(index: number, field: 'type' | 'addressLines', value: any) {
    const nextOffices = [...data.offices];
    nextOffices[index] = { ...nextOffices[index], [field]: value };
    setData({ ...data, offices: nextOffices });
  }

  function addOffice() {
    setData({
      ...data,
      offices: [
        ...data.offices,
        { type: 'New Office', addressLines: ['Address line 1', 'City - Pincode', 'Country'] },
      ],
    });
  }

  function removeOffice(index: number) {
    setData({
      ...data,
      offices: data.offices.filter((_, i) => i !== index),
    });
  }

  return (
    <div className="min-h-screen bg-[#070e17] text-white pb-24">
      <AdminHeader
        title="Company & Contact Details"
        subtitle="Manage official addresses, contact phone numbers, emails, and copyright notice"
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

      <main className="max-w-4xl mx-auto px-6 space-y-6">
        {/* Core Identity */}
        <section className="bg-[rgba(12,22,34,0.85)] border border-white/10 rounded-xl p-6 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#20d7b5]">
            Corporate Identity
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                Full Company Name
              </label>
              <input
                type="text"
                value={data.companyName}
                onChange={(e) => setData({ ...data, companyName: e.target.value })}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#20d7b5] text-xs font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                Brand Short Name
              </label>
              <input
                type="text"
                value={data.shortName}
                onChange={(e) => setData({ ...data, shortName: e.target.value })}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#20d7b5] text-xs font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
              Tagline
            </label>
            <input
              type="text"
              value={data.tagline}
              onChange={(e) => setData({ ...data, tagline: e.target.value })}
              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#20d7b5] text-xs"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
              Primary Contact Email
            </label>
            <input
              type="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#20d7b5] text-xs font-mono"
            />
          </div>

          <div>
            <ArrayEditor
              label="Contact Phone Numbers"
              items={data.phoneNumbers}
              onChange={(phones) => setData({ ...data, phoneNumbers: phones })}
              placeholder="+91 XXXXXXXXXX"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
              Copyright Notice
            </label>
            <input
              type="text"
              value={data.copyright}
              onChange={(e) => setData({ ...data, copyright: e.target.value })}
              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#20d7b5] text-xs"
            />
          </div>
        </section>

        {/* Offices */}
        <section className="bg-[rgba(12,22,34,0.85)] border border-white/10 rounded-xl p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#20d7b5]">
              Office Locations & Addresses
            </h2>
            <button
              type="button"
              onClick={addOffice}
              className="text-xs text-[#20d7b5] hover:underline"
            >
              + Add Office
            </button>
          </div>

          <div className="space-y-6">
            {data.offices.map((office, idx) => (
              <div key={idx} className="p-4 bg-black/30 border border-white/10 rounded-xl space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <input
                    type="text"
                    value={office.type}
                    onChange={(e) => updateOffice(idx, 'type', e.target.value)}
                    placeholder="Office Type (e.g. Head Office, Branch Office)"
                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded text-white text-xs font-semibold flex-1 max-w-xs focus:outline-none focus:border-[#20d7b5]"
                  />
                  {data.offices.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeOffice(idx)}
                      className="text-xs text-red-400 hover:text-red-300"
                    >
                      ✕ Remove Office
                    </button>
                  )}
                </div>

                <ArrayEditor
                  label="Address Lines"
                  items={office.addressLines}
                  onChange={(lines) => updateOffice(idx, 'addressLines', lines)}
                  placeholder="e.g. 20, H-1/A, Sector 63"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
