'use client';

import { useState, useEffect } from 'react';
import { homeContent } from '@/app/data/home-content';
import type { HomeContent, Director } from '@/app/data/home-content';
import AdminHeader from '@/app/admin/components/AdminHeader';
import SaveBar from '@/app/admin/components/SaveBar';
import { broadcastContentUpdate } from '@/app/data/useContentData';

const FILE_PATH = 'dax_labs/app/data/content/home-content.json';

export default function EditHomepage() {
  const [data, setData] = useState<HomeContent>(() => homeContent);
  const [initialJson, setInitialJson] = useState<string>('');
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<'idle' | 'saved' | 'error'>('idle');
  const [statusMsg, setStatusMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    async function loadFresh() {
      try {
        const res = await fetch('/api/admin/content?file=home-content');
        if (res.ok) {
          const json = await res.json();
          if (json.data && json.data.hero) {
            setData(json.data);
            setInitialJson(JSON.stringify(json.data));
            return;
          }
        }
      } catch {
        // fallback
      }
      setInitialJson(JSON.stringify(homeContent));
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

      broadcastContentUpdate(FILE_PATH.split('/').pop() || 'home-content.json', content);

      setInitialJson(JSON.stringify(data));
      setStatus('saved');
      setStatusMsg(resData.message || 'Homepage content saved successfully!');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Unknown error occurred');
    } finally {
      setSaving(false);
    }
  }

  function handleDiscard() {
    if (confirm('Discard changes to homepage content?')) {
      if (initialJson) {
        setData(JSON.parse(initialJson));
      }
      setStatus('idle');
    }
  }

  function updateHeroField(field: keyof HomeContent['hero'], value: any) {
    setData({
      ...data,
      hero: {
        ...data.hero,
        [field]: value,
      },
    });
  }

  function updateDirector(index: number, field: keyof Director, value: any) {
    const updated = [...data.directors];
    updated[index] = { ...updated[index], [field]: value };
    setData({ ...data, directors: updated });
  }

  function addDirector() {
    const newDir: Director = {
      name: 'Executive Name',
      designation: 'Title / Role',
      statement: 'At DAK Security Labs, delivering uncompromised defense is our highest priority.',
      image: '/director-1.jpeg',
      imagePosition: 'center',
      reverse: false,
      active: true,
    };
    setData({ ...data, directors: [...data.directors, newDir] });
  }

  function removeDirector(index: number) {
    setData({
      ...data,
      directors: data.directors.filter((_, i) => i !== index),
    });
  }

  return (
    <div className="min-h-screen bg-[#070e17] text-white pb-24">
      <AdminHeader
        title="Homepage & Leadership"
        subtitle="Manage hero banner text, calls to action, and executive leadership profiles"
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
        {/* Hero Section Content */}
        <section className="bg-[rgba(12,22,34,0.85)] border border-white/10 rounded-xl p-6 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#20d7b5]">
            Hero Banner Section
          </h2>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
              Top Badge Text
            </label>
            <input
              type="text"
              value={data.hero.badge}
              onChange={(e) => updateHeroField('badge', e.target.value)}
              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#20d7b5] text-xs font-medium"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                Heading Line 1
              </label>
              <input
                type="text"
                value={data.hero.headingLine1}
                onChange={(e) => updateHeroField('headingLine1', e.target.value)}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#20d7b5] text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                Accent Word (Teal Color)
              </label>
              <input
                type="text"
                value={data.hero.headingAccent}
                onChange={(e) => updateHeroField('headingAccent', e.target.value)}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#20d7b5] text-xs text-[#20d7b5] font-semibold"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                Heading Line 2
              </label>
              <input
                type="text"
                value={data.hero.headingLine2}
                onChange={(e) => updateHeroField('headingLine2', e.target.value)}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#20d7b5] text-xs"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
              Hero Subtitle
            </label>
            <textarea
              rows={2}
              value={data.hero.subtitle}
              onChange={(e) => updateHeroField('subtitle', e.target.value)}
              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#20d7b5] text-xs"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-white/10">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                Primary CTA Button Text
              </label>
              <input
                type="text"
                value={data.hero.primaryCta.text}
                onChange={(e) =>
                  updateHeroField('primaryCta', { ...data.hero.primaryCta, text: e.target.value })
                }
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#20d7b5] text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                Secondary CTA Button Text
              </label>
              <input
                type="text"
                value={data.hero.secondaryCta.text}
                onChange={(e) =>
                  updateHeroField('secondaryCta', { ...data.hero.secondaryCta, text: e.target.value })
                }
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#20d7b5] text-xs"
              />
            </div>
          </div>
        </section>

        {/* Directors & Leadership */}
        <section className="bg-[rgba(12,22,34,0.85)] border border-white/10 rounded-xl p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#20d7b5]">
                Leadership & Directors Section
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">
                Shown prominently at the top of the homepage
              </p>
            </div>
            <button
              type="button"
              onClick={addDirector}
              className="text-xs text-[#20d7b5] hover:underline"
            >
              + Add Leader
            </button>
          </div>

          <div className="space-y-6">
            {data.directors.map((director, idx) => (
              <div key={idx} className="p-4 bg-black/30 border border-white/10 rounded-xl space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-500 font-mono">#{idx + 1}</span>
                    <label className="inline-flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={director.active !== false}
                        onChange={(e) => updateDirector(idx, 'active', e.target.checked)}
                        className="rounded border-white/20 text-[#20d7b5] focus:ring-0"
                      />
                      <span className="text-xs text-gray-300 font-medium">
                        {director.active !== false ? 'Active on Homepage' : 'Hidden'}
                      </span>
                    </label>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeDirector(idx)}
                    className="text-xs text-red-400 hover:text-red-300"
                  >
                    ✕ Remove Leader
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      value={director.name}
                      onChange={(e) => updateDirector(idx, 'name', e.target.value)}
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#20d7b5] text-xs font-semibold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                      Designation / Role
                    </label>
                    <input
                      type="text"
                      value={director.designation}
                      onChange={(e) => updateDirector(idx, 'designation', e.target.value)}
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#20d7b5] text-xs text-[#20d7b5]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                    Personal Statement / Quote
                  </label>
                  <textarea
                    rows={3}
                    value={director.statement}
                    onChange={(e) => updateDirector(idx, 'statement', e.target.value)}
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#20d7b5] text-xs"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                      Photo Path
                    </label>
                    <input
                      type="text"
                      value={director.image}
                      onChange={(e) => updateDirector(idx, 'image', e.target.value)}
                      placeholder="/director-2.jpeg"
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#20d7b5] text-xs font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                      Layout Alignment
                    </label>
                    <select
                      value={director.reverse ? 'reverse' : 'normal'}
                      onChange={(e) => updateDirector(idx, 'reverse', e.target.value === 'reverse')}
                      className="w-full px-3 py-2 bg-[#08121d] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#20d7b5] text-xs"
                    >
                      <option value="normal">Photo Left, Quote Right</option>
                      <option value="reverse">Quote Left, Photo Right</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
