import createPalette from '@styles/createPalette';
import createSpacing from '@styles/createSpacing';
import createTypography from '@styles/createTypography';
import createShape from '@styles/createShape';
import { createContext, useContext } from 'react';

const isDarkMode = false;
const palette = createPalette(isDarkMode);
const typography = createTypography(isDarkMode);
const spacing = createSpacing();
const shape = createShape();

export const ThemeContext = createContext({
  palette,
  typography,
  spacing,
  shape,
});

export default function useTheme() {
  return useContext(ThemeContext);
}
