import createTheme from '@styles/createTheme';
import React from 'react';
import { ThemeContext } from '@styles/useTheme';
import { useColorScheme } from 'react-native';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = createTheme(isDarkMode);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
