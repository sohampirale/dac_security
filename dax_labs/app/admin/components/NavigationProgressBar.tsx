'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function NavigationProgressBar() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [targetLabel, setTargetLabel] = useState<string>('');

  useEffect(() => {
    // When pathname updates, navigation is complete
    setLoading(false);
    setTargetLabel('');
  }, [pathname]);

  useEffect(() => {
    function handleAnchorClick(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest('a');
      if (!target || !target.href) return;

      const url = new URL(target.href, window.location.origin);
      const isInternal = url.origin === window.location.origin;
      const isDifferentPath = url.pathname !== window.location.pathname;

      if (isInternal && isDifferentPath && !target.target && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
        setLoading(true);
        // Extract section or page title if present
        const text = target.innerText.split('\n')[0].trim();
        setTargetLabel(text ? `Opening ${text}...` : 'Loading page...');
      }
    }

    document.addEventListener('click', handleAnchorClick, { capture: true });
    return () => document.removeEventListener('click', handleAnchorClick, { capture: true });
  }, []);

  if (!loading) return null;

  return (
    <>
      {/* Top glowing progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 overflow-hidden bg-black/40">
        <div className="h-full bg-gradient-to-r from-[#20d7b5] via-[#2f90ff] to-[#20d7b5] animate-progress origin-left w-full shadow-[0_0_10px_#20d7b5]" />
      </div>

      {/* Floating loading toast in corner */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[rgba(11,20,30,0.95)] border border-[rgba(32,215,181,0.4)] text-white shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-md animate-fade-in">
        <svg className="animate-spin h-4 w-4 text-[#20d7b5]" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
        </svg>
        <span className="text-xs font-semibold tracking-wide text-gray-200">
          {targetLabel || 'Loading request...'}
        </span>
      </div>
    </>
  );
}
