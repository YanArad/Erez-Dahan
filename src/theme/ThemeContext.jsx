import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { THEME_LIGHT, THEME_DARK, STORAGE_KEY, THEME_ATTRIBUTE } from './themeConstants';

const ThemeContext = createContext(null);

function readStoredTheme() {
  const storedTheme = window.localStorage.getItem(STORAGE_KEY);
  return storedTheme === THEME_DARK || storedTheme === THEME_LIGHT ? storedTheme : THEME_LIGHT;
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(readStoredTheme);

  useEffect(() => {
    document.documentElement.setAttribute(THEME_ATTRIBUTE, theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () => setTheme((current) => (current === THEME_DARK ? THEME_LIGHT : THEME_DARK)),
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error('useTheme must be used inside a ThemeProvider');
  }
  return context;
}
