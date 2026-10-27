'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { itSecurityProducts } from '@/app/data/it-security-products';
import type { ProductData } from '@/app/data/it-security-products';
import AdminHeader from '@/app/admin/components/AdminHeader';
import SaveBar from '@/app/admin/components/SaveBar';
import ArrayEditor from '@/app/admin/components/ArrayEditor';
import KeyValueEditor from '@/app/admin/components/KeyValueEditor';
import PairListEditor from '@/app/admin/components/PairListEditor';
import ConfirmModal from '@/app/admin/components/ConfirmModal';
import AddProductModal from '@/app/admin/components/AddProductModal';

const FILE_PATH = 'dax_labs/app/data/content/it-security-products.json';

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

export default function EditITSecurity() {
  const [items, setItems] = useState<ProductData[]>(() => itSecurityProducts);
  const [initialJson, setInitialJson] = useState<string>('');
  const [search, setSearch] = useState('');
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<'idle' | 'saved' | 'error'>('idle');
  const [statusMsg, setStatusMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Modals state
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [deleteIdx, setDeleteIdx] = useState<number | null>(null);

  // Accordion open state
  const [openSlugs, setOpenSlugs] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Fetch live content if available
    async function loadFresh() {
      try {
        const res = await fetch('/api/admin/content?file=it-security');
        if (res.ok) {
          const json = await res.json();
          if (Array.isArray(json.data)) {
            setItems(json.data);
            setInitialJson(JSON.stringify(json.data));
            return;
          }
        }
      } catch {
        // fallback to bundled import
      }
      setInitialJson(JSON.stringify(itSecurityProducts));
    }
    loadFresh();
  }, []);

  const hasChanges = initialJson !== '' && initialJson !== JSON.stringify(items);

  async function handleSave() {
    setSaving(true);
    setStatus('idle');
    setErrorMsg('');
    setStatusMsg('');

    try {
      const content = JSON.stringify(items, null, 2);
      const githubToken =
        typeof window !== 'undefined' ? localStorage.getItem('dak_github_pat') || undefined : undefined;

      const res = await fetch('/api/admin/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filePath: FILE_PATH, content, githubToken }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to save changes');
      }

      if (typeof window !== 'undefined') {
        localStorage.setItem(`dak_content_override_${FILE_PATH.split('/').pop()}`, content);
      }

      setInitialJson(JSON.stringify(items));
      setStatus('saved');
      setStatusMsg(data.message || 'Changes saved successfully!');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Unknown error occurred');
    } finally {
      setSaving(false);
    }
  }

  function handleDiscard() {
    if (confirm('Discard all unsaved changes in IT Security Products?')) {
      if (initialJson) {
        setItems(JSON.parse(initialJson));
      }
      setStatus('idle');
    }
  }

  function updateItem(index: number, field: keyof ProductData, value: unknown) {
    setItems((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  }

  function handleAddProduct(newProduct: any) {
    setItems((prev) => [newProduct, ...prev]);
    setOpenSlugs((prev) => ({ ...prev, [newProduct.slug]: true }));
  }

  function handleClone(index: number) {
    const original = items[index];
    const newSlug = `${original.slug}-copy-${Date.now().toString().slice(-4)}`;
    const cloned: ProductData = {
      ...JSON.parse(JSON.stringify(original)),
      name: `${original.name} (Copy)`,
      slug: newSlug,
    };
    setItems((prev) => {
      const next = [...prev];
      next.splice(index + 1, 0, cloned);
      return next;
    });
    setOpenSlugs((prev) => ({ ...prev, [newSlug]: true }));
  }

  function handleDeleteConfirm() {
    if (deleteIdx !== null) {
      setItems((prev) => prev.filter((_, i) => i !== deleteIdx));
      setDeleteIdx(null);
    }
  }

  function handleMove(index: number, direction: 'up' | 'down') {
    if (
      (direction === 'up' && index === 0) ||
      (direction === 'down' && index === items.length - 1)
    ) {
      return;
    }
    const targetIdx = direction === 'up' ? index - 1 : index + 1;
    setItems((prev) => {
      const next = [...prev];
      const temp = next[index];
      next[index] = next[targetIdx];
      next[targetIdx] = temp;
      return next;
    });
  }

  function toggleSlug(slug: string) {
    setOpenSlugs((prev) => ({ ...prev, [slug]: !prev[slug] }));
  }

  function setAllOpen(open: boolean) {
    const next: Record<string, boolean> = {};
    items.forEach((item) => {
      next[item.slug] = open;
    });
    setOpenSlugs(next);
  }

  const filteredItems = items.filter((item) => {
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return (
      item.name.toLowerCase().includes(q) ||
      item.slug.toLowerCase().includes(q) ||
      item.shortDescription.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-[#070e17] text-white pb-24">
      <AdminHeader
        title="IT Security Products"
        subtitle="Manage cloud defense, SIEM, firewalls, and infrastructure security solutions"
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

      <main className="max-w-6xl mx-auto px-6">
        {/* Controls Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur">
          <div className="flex items-center gap-3 flex-1 min-w-[280px]">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products by name or slug..."
              className="w-full max-w-md px-3.5 py-2 bg-black/40 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#20d7b5] text-xs"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="text-xs text-gray-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setAllOpen(true)}
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-medium"
            >
              Expand All
            </button>
            <button
              type="button"
              onClick={() => setAllOpen(false)}
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-medium"
            >
              Collapse All
            </button>
            <button
              type="button"
              onClick={() => setIsAddOpen(true)}
              className="px-4 py-2 bg-[#20d7b5] text-[#070d14] font-semibold text-xs rounded-lg hover:bg-[#17b89b] transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(32,215,181,0.25)]"
            >
              <span className="text-base leading-none">+</span>
              <span>Add Product</span>
            </button>
          </div>
        </div>

        {/* Product List */}
        <div className="space-y-4">
          {filteredItems.map((item) => {
            const originalIndex = items.findIndex((p) => p.slug === item.slug);
            const isOpen = !!openSlugs[item.slug];

            return (
              <div
                key={item.slug}
                className="bg-[rgba(12,22,34,0.85)] border border-white/10 rounded-xl overflow-hidden transition-all shadow-md"
              >
                {/* Header Row */}
                <div className="px-5 py-4 flex items-center justify-between gap-4 hover:bg-white/5 transition-colors">
                  <div
                    onClick={() => toggleSlug(item.slug)}
                    className="flex items-center gap-3 cursor-pointer flex-1"
                  >
                    <span className="text-xs text-gray-500 font-mono w-6">
                      #{originalIndex + 1}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#20d7b5]" />
                    <div>
                      <h3 className="text-sm font-semibold text-white tracking-wide flex items-center gap-2">
                        {item.name}
                        <code className="text-[11px] font-normal text-gray-400 bg-white/5 px-2 py-0.5 rounded">
                          {item.slug}
                        </code>
                      </h3>
                      <p className="text-xs text-gray-400 line-clamp-1 mt-0.5">
                        {item.shortDescription}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      href={`/products/it-security/${item.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 text-[11px] text-gray-400 hover:text-[#20d7b5] bg-white/5 hover:bg-white/10 rounded transition-colors"
                      title="View product page"
                    >
                      Preview ↗
                    </Link>

                    <button
                      type="button"
                      onClick={() => handleMove(originalIndex, 'up')}
                      disabled={originalIndex === 0}
                      className="p-1 text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed text-xs"
                      title="Move up"
                    >
                      ▲
                    </button>
                    <button
                      type="button"
                      onClick={() => handleMove(originalIndex, 'down')}
                      disabled={originalIndex === items.length - 1}
                      className="p-1 text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed text-xs"
                      title="Move down"
                    >
                      ▼
                    </button>

                    <button
                      type="button"
                      onClick={() => handleClone(originalIndex)}
                      className="px-2.5 py-1 text-[11px] text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 rounded transition-colors"
                      title="Clone / duplicate product"
                    >
                      Duplicate
                    </button>

                    <button
                      type="button"
                      onClick={() => setDeleteIdx(originalIndex)}
                      className="px-2.5 py-1 text-[11px] text-red-400 hover:text-red-300 bg-red-500/10 hover:bg-red-500/20 rounded transition-colors"
                      title="Delete product"
                    >
                      Delete
                    </button>

                    <button
                      type="button"
                      onClick={() => toggleSlug(item.slug)}
                      className="p-1 text-gray-400 hover:text-white text-xs ml-1"
                    >
                      {isOpen ? '▲' : '▼'}
                    </button>
                  </div>
                </div>

                {/* Edit Form Body */}
                {isOpen && (
                  <div className="px-6 py-5 border-t border-white/10 bg-black/30 space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                          Product Name
                        </label>
                        <input
                          type="text"
                          value={item.name}
                          onChange={(e) => updateItem(originalIndex, 'name', e.target.value)}
                          className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#20d7b5] text-xs font-medium"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                          URL Slug (Page Path)
                        </label>
                        <input
                          type="text"
                          value={item.slug}
                          onChange={(e) => updateItem(originalIndex, 'slug', e.target.value)}
                          className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white font-mono focus:outline-none focus:border-[#20d7b5] text-xs"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                          Icon Key
                        </label>
                        <select
                          value={item.iconKey || AVAILABLE_ICONS[0]}
                          onChange={(e) => updateItem(originalIndex, 'iconKey', e.target.value)}
                          className="w-full px-3 py-2 bg-[#08121d] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#20d7b5] text-xs"
                        >
                          {AVAILABLE_ICONS.map((icon) => (
                            <option key={icon} value={icon}>
                              {icon.toUpperCase()}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                          Category
                        </label>
                        <select
                          value={item.category || 'it-security'}
                          onChange={(e) => updateItem(originalIndex, 'category', e.target.value as any)}
                          className="w-full px-3 py-2 bg-[#08121d] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#20d7b5] text-xs"
                        >
                          <option value="it-security">IT Security</option>
                          <option value="digital-forensic">Digital Forensic</option>
                          <option value="forensic-software">Forensic Software</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                        Short Description
                      </label>
                      <textarea
                        rows={2}
                        value={item.shortDescription}
                        onChange={(e) => updateItem(originalIndex, 'shortDescription', e.target.value)}
                        className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#20d7b5] text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                        Full Description (Paragraphs separated by blank lines)
                      </label>
                      <textarea
                        rows={5}
                        value={item.fullDescription}
                        onChange={(e) => updateItem(originalIndex, 'fullDescription', e.target.value)}
                        className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#20d7b5] text-xs font-mono"
                      />
                    </div>

                    {/* Features Editor */}
                    <div className="pt-2 border-t border-white/10">
                      <ArrayEditor
                        label="Key Features"
                        items={item.features || []}
                        onChange={(features) => updateItem(originalIndex, 'features', features)}
                        placeholder="Feature description..."
                      />
                    </div>

                    {/* Specifications Editor */}
                    <div className="pt-2 border-t border-white/10">
                      <KeyValueEditor
                        label="Specifications"
                        items={item.specifications || []}
                        onChange={(specs) => updateItem(originalIndex, 'specifications', specs)}
                      />
                    </div>

                    {/* Use Cases Editor */}
                    <div className="pt-2 border-t border-white/10">
                      <PairListEditor
                        label="Use Cases"
                        items={item.useCases || []}
                        onChange={(useCases) => updateItem(originalIndex, 'useCases', useCases)}
                        titlePlaceholder="Use case scenario (e.g. Financial Networks)"
                        descPlaceholder="Details on how this product addresses that use case..."
                      />
                    </div>

                    {/* Benefits Editor */}
                    <div className="pt-2 border-t border-white/10">
                      <ArrayEditor
                        label="Key Benefits"
                        items={item.benefits || []}
                        onChange={(benefits) => updateItem(originalIndex, 'benefits', benefits)}
                        placeholder="Benefit statement..."
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {filteredItems.length === 0 && (
            <div className="text-center py-12 bg-white/5 border border-white/10 rounded-xl">
              <p className="text-gray-400 text-sm">No products found matching &quot;{search}&quot;</p>
              <button
                onClick={() => setSearch('')}
                className="mt-2 text-xs text-[#20d7b5] hover:underline"
              >
                Clear filter
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Add Product Modal */}
      <AddProductModal
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onAdd={handleAddProduct}
        category="it-security"
        existingSlugs={items.map((p) => p.slug)}
      />

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={deleteIdx !== null}
        title="Delete IT Security Product"
        message={`Are you sure you want to delete "${
          deleteIdx !== null ? items[deleteIdx]?.name : ''
        }"? You must click "Save All Changes" to make this permanent.`}
        confirmLabel="Yes, Delete Product"
        cancelLabel="Cancel"
        isDestructive={true}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteIdx(null)}
      />
    </div>
  );
}
