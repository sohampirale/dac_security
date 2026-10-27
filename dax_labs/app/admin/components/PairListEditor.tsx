'use client';

export interface TitleDescPair {
  title: string;
  description: string;
}

interface PairListEditorProps {
  label: string;
  items: TitleDescPair[];
  onChange: (items: TitleDescPair[]) => void;
  titlePlaceholder?: string;
  descPlaceholder?: string;
}

export default function PairListEditor({
  label,
  items = [],
  onChange,
  titlePlaceholder = 'Title (e.g. Banking Infrastructure)',
  descPlaceholder = 'Description (e.g. Protects against advanced API threats...)',
}: PairListEditorProps) {
  function handleItemChange(index: number, field: 'title' | 'description', val: string) {
    const updated = [...items];
    updated[index] = { ...updated[index], [field]: val };
    onChange(updated);
  }

  function handleAdd() {
    onChange([...items, { title: '', description: '' }]);
  }

  function handleRemove(index: number) {
    onChange(items.filter((_, i) => i !== index));
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">
          {label} ({items.length})
        </label>
        <button
          type="button"
          onClick={handleAdd}
          className="text-xs font-medium text-[#20d7b5] hover:underline flex items-center gap-1"
        >
          <span>+ Add Entry</span>
        </button>
      </div>

      <div className="space-y-3">
        {items.map((item, idx) => (
          <div key={idx} className="p-3 bg-white/5 border border-white/10 rounded-lg space-y-2 relative">
            <div className="flex items-center justify-between gap-2">
              <input
                type="text"
                value={item.title}
                onChange={(e) => handleItemChange(idx, 'title', e.target.value)}
                placeholder={titlePlaceholder}
                className="flex-1 px-3 py-1.5 bg-black/40 border border-white/10 rounded text-white placeholder-gray-500 focus:outline-none focus:border-[#20d7b5] text-xs font-medium"
              />
              <button
                type="button"
                onClick={() => handleRemove(idx)}
                className="px-2 py-1 text-red-400 hover:text-red-300 text-xs hover:bg-red-500/10 rounded"
                title="Remove entry"
              >
                ✕ Remove
              </button>
            </div>
            <textarea
              rows={2}
              value={item.description}
              onChange={(e) => handleItemChange(idx, 'description', e.target.value)}
              placeholder={descPlaceholder}
              className="w-full px-3 py-1.5 bg-black/40 border border-white/10 rounded text-white placeholder-gray-500 focus:outline-none focus:border-[#20d7b5] text-xs"
            />
          </div>
        ))}

        {items.length === 0 && (
          <p className="text-xs text-gray-500 italic py-1">No entries yet. Click &quot;+ Add Entry&quot; to add one.</p>
        )}
      </div>
    </div>
  );
}
