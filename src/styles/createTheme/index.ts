import createPalette from '../createPalette';
import createTypography from '../createTypography';
import createSpacing from '../createSpacing';
import createShape from '../createShape';

const createTheme = (isDarkMode: boolean) => {
  const palette = createPalette(isDarkMode);
  const typography = createTypography(isDarkMode);
  const spacing = createSpacing();
  const shape = createShape();

  return {
    palette,
    typography,
    spacing,
    shape,
  };
};

export default createTheme;
