'use client';

interface ArrayEditorProps {
  label: string;
  items: string[];
  onChange: (items: string[]) => void;
  placeholder?: string;
}

export default function ArrayEditor({
  label,
  items = [],
  onChange,
  placeholder = 'Add new item...',
}: ArrayEditorProps) {
  function handleItemChange(index: number, val: string) {
    const updated = [...items];
    updated[index] = val;
    onChange(updated);
  }

  function handleAdd() {
    onChange([...items, '']);
  }

  function handleRemove(index: number) {
    onChange(items.filter((_, i) => i !== index));
  }

  function handleMove(index: number, direction: 'up' | 'down') {
    if (
      (direction === 'up' && index === 0) ||
      (direction === 'down' && index === items.length - 1)
    ) {
      return;
    }
    const updated = [...items];
    const targetIdx = direction === 'up' ? index - 1 : index + 1;
    const temp = updated[index];
    updated[index] = updated[targetIdx];
    updated[targetIdx] = temp;
    onChange(updated);
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
          <span>+ Add Item</span>
        </button>
      </div>

      <div className="space-y-2">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <span className="text-xs text-gray-500 w-5 text-right font-mono">{idx + 1}.</span>
            <input
              type="text"
              value={item}
              onChange={(e) => handleItemChange(idx, e.target.value)}
              placeholder={placeholder}
              className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#20d7b5] text-xs transition-colors"
            />
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => handleMove(idx, 'up')}
                disabled={idx === 0}
                className="p-1.5 text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed text-xs"
                title="Move up"
              >
                ▲
              </button>
              <button
                type="button"
                onClick={() => handleMove(idx, 'down')}
                disabled={idx === items.length - 1}
                className="p-1.5 text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed text-xs"
                title="Move down"
              >
                ▼
              </button>
              <button
                type="button"
                onClick={() => handleRemove(idx)}
                className="p-1.5 text-red-400 hover:text-red-300 text-xs hover:bg-red-500/10 rounded"
                title="Remove item"
              >
                ✕
              </button>
            </div>
          </div>
        ))}

        {items.length === 0 && (
          <p className="text-xs text-gray-500 italic py-1">No items yet. Click &quot;+ Add Item&quot; to add one.</p>
        )}
      </div>
    </div>
  );
}
