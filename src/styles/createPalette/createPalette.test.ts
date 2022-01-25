import createPalette from './index';

describe('Creates Palette Object', () => {
  it('should be defined', () => {
    expect(createPalette).toBeDefined();
  });

  it('uses the dark theme text property', () => {
    const palette = createPalette(true);
    const textProperty = palette.text;

    expect(textProperty).toEqual({
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
    });
  });

  it('uses the light theme text property', () => {
    const palette = createPalette(false);
    const textProperty = palette.text;

    expect(textProperty).toEqual({
      primary: '#4A4A4A',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: '#767676',
    });
  });

  it('has as primary and secondary color ', () => {
    const palette = createPalette(true);
    const primary = palette.primary;
    const secondary = palette.secondary;

    expect(primary).toBe('#38B5e6');
    expect(secondary).toBe('#E13CB0');
  });

  it('has an error color object', () => {
    const palette = createPalette(true);
    const error = palette.error;

    expect(error.main).toBe('#9A002B');
    expect(error.contrastText).toBe('#fff');
  });
});
