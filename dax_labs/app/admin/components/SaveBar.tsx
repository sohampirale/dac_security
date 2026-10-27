'use client';

interface SaveBarProps {
  onSave: () => void;
  onReset?: () => void;
  saving: boolean;
  hasChanges?: boolean;
  status: 'idle' | 'saved' | 'error';
  errorMessage?: string;
  statusMessage?: string;
}

export default function SaveBar({
  onSave,
  onReset,
  saving,
  hasChanges = false,
  status,
  errorMessage,
  statusMessage,
}: SaveBarProps) {
  return (
    <div className="sticky top-[65px] z-20 bg-[#070e17]/95 border-b border-white/10 backdrop-blur-md px-6 py-3 mb-6 shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {hasChanges ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
              Unsaved Changes
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-400">
              All Changes Saved
            </span>
          )}

          {status === 'saved' && (
            <span className="text-xs text-green-400 font-medium flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {statusMessage || 'Saved successfully!'}
            </span>
          )}

          {status === 'error' && (
            <span className="text-xs text-red-400 font-medium flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errorMessage || 'Failed to save changes.'}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3 ml-auto">
          {onReset && hasChanges && (
            <button
              type="button"
              onClick={onReset}
              disabled={saving}
              className="px-3 py-1.5 text-xs text-gray-400 hover:text-white transition-colors"
            >
              Discard Changes
            </button>
          )}

          <button
            type="button"
            onClick={onSave}
            disabled={saving || !hasChanges}
            className="px-5 py-2 bg-gradient-to-r from-[#20d7b5] to-[#17b89b] text-[#070d14] font-semibold text-xs tracking-wider uppercase rounded-lg hover:shadow-[0_0_15px_rgba(32,215,181,0.35)] disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-2"
          >
            {saving ? (
              <>
                <svg className="animate-spin h-3.5 w-3.5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Saving...
              </>
            ) : (
              'Save All Changes'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
