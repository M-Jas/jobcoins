import createTheme from './index';

describe('Default theme', () => {
  const theme = createTheme(true);

  it('should never be an empty object', () => {
    expect(theme).not.toBe({});
  });

  it('should have a length of 4', () => {
    const maxLength = 4;
    const themeKeys = Object.keys(theme);

    expect(themeKeys).toHaveLength(maxLength);
  });
});
