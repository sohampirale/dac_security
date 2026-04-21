'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark';

interface ThemeContextType {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme: 'dark' }}>
      {children}
    </ThemeContext.Provider>
  );
}
