// lib/ThemeWrapper.js
"use client";
import { useState, createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../src/theme';

// Export the context so it can be imported elsewhere
export const ThemeToggleContext = createContext();

export function ThemeWrapper({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeToggleContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
}