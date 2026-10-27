'use client';

import { useState, useEffect } from 'react';

/**
 * Universal hook to seamlessly hydrate content overrides from localStorage & session cache.
 * Perfect for demonstration meetings and dynamic client previews on serverless environments.
 */
export function useContentData<T>(filename: string, fallbackData: T): T {
  const [data, setData] = useState<T>(() => {
    // If running in browser and already cached in localStorage, initialize with it immediately
    if (typeof window !== 'undefined') {
      try {
        const key = filename.endsWith('.json') ? filename : `${filename}.json`;
        const stored = localStorage.getItem(`dak_content_override_${key}`);
        if (stored) {
          return JSON.parse(stored);
        }
      } catch {}
    }
    return fallbackData;
  });

  useEffect(() => {
    const key = filename.endsWith('.json') ? filename : `${filename}.json`;

    function loadFromStorage(): boolean {
      try {
        const stored = localStorage.getItem(`dak_content_override_${key}`);
        if (stored) {
          const parsed = JSON.parse(stored);
          setData(parsed);
          return true;
        }
      } catch {}
      return false;
    }

    const hasStored = loadFromStorage();

    // Fetch from public content API for cross-device / cold-visit synchronization
    fetch(`/api/content?file=${encodeURIComponent(key)}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((json) => {
        if (json?.data) {
          // If we didn't have a local override, or if server has fresh content
          if (!hasStored) {
            setData(json.data);
            try {
              localStorage.setItem(`dak_content_override_${key}`, JSON.stringify(json.data));
            } catch {}
          }
        }
      })
      .catch(() => {});

    function handleContentUpdate(e: Event) {
      const customEvent = e as CustomEvent<{ file?: string }>;
      if (!customEvent.detail?.file || customEvent.detail.file.includes(filename.replace('.json', ''))) {
        loadFromStorage();
      }
    }

    window.addEventListener('dak_content_updated', handleContentUpdate);
    window.addEventListener('storage', loadFromStorage);

    return () => {
      window.removeEventListener('dak_content_updated', handleContentUpdate);
      window.removeEventListener('storage', loadFromStorage);
    };
  }, [filename]);

  return data;
}

export function broadcastContentUpdate(filename: string, content: string) {
  if (typeof window !== 'undefined') {
    const key = filename.endsWith('.json') ? filename : `${filename}.json`;
    localStorage.setItem(`dak_content_override_${key}`, content);
    window.dispatchEvent(new CustomEvent('dak_content_updated', { detail: { file: key } }));
  }
}
