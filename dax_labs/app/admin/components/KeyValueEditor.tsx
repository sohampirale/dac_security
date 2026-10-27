'use client';

export interface KeyValuePair {
  label: string;
  value: string;
}

interface KeyValueEditorProps {
  label: string;
  items: KeyValuePair[];
  onChange: (items: KeyValuePair[]) => void;
  keyPlaceholder?: string;
  valuePlaceholder?: string;
}

export default function KeyValueEditor({
  label,
  items = [],
  onChange,
  keyPlaceholder = 'Specification (e.g. Deployment)',
  valuePlaceholder = 'Value (e.g. Cloud & On-Premises)',
}: KeyValueEditorProps) {
  function handleItemChange(index: number, field: 'label' | 'value', val: string) {
    const updated = [...items];
    updated[index] = { ...updated[index], [field]: val };
    onChange(updated);
  }

  function handleAdd() {
    onChange([...items, { label: '', value: '' }]);
  }

  function handleRemove(index: number) {
    onChange(items.filter((_, i) => i !== index));
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">
          {label} ({items.length})
        </label>
        <button
          type="button"
          onClick={handleAdd}
          className="text-xs font-medium text-[#20d7b5] hover:underline flex items-center gap-1"
        >
          <span>+ Add Specification</span>
        </button>
      </div>

      <div className="space-y-2">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <input
              type="text"
              value={item.label}
              onChange={(e) => handleItemChange(idx, 'label', e.target.value)}
              placeholder={keyPlaceholder}
              className="w-1/3 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#20d7b5] text-xs transition-colors"
            />
            <input
              type="text"
              value={item.value}
              onChange={(e) => handleItemChange(idx, 'value', e.target.value)}
              placeholder={valuePlaceholder}
              className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#20d7b5] text-xs transition-colors"
            />
            <button
              type="button"
              onClick={() => handleRemove(idx)}
              className="p-1.5 text-red-400 hover:text-red-300 text-xs hover:bg-red-500/10 rounded"
              title="Remove specification"
            >
              ✕
            </button>
          </div>
        ))}

        {items.length === 0 && (
          <p className="text-xs text-gray-500 italic py-1">No specifications. Click &quot;+ Add Specification&quot;.</p>
        )}
      </div>
    </div>
  );
}
