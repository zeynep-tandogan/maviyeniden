import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // localStorage'dan kayıtlı temayı al, yoksa varsayılan 'dark'
    return localStorage.getItem('mv-theme') || 'dark';
  });

  useEffect(() => {
    // HTML kök elementine data-theme attr ekle
    const root = document.documentElement;
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
    } else {
      root.removeAttribute('data-theme');
    }
    localStorage.setItem('mv-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Kolay kullanım için custom hook
export function useTheme() {
  return useContext(ThemeContext);
}
