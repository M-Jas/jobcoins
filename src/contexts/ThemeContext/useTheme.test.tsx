// Libs
import { render } from '@test/test-utils';
import React from 'react';
import { View } from 'react-native';
import useTheme from '../useTheme';

describe('useTheme', () => {
  it('should provide the theme to children components', () => {
    let themeFromProvider;

    const MakeComponent = () => {
      const theme = useTheme();
      themeFromProvider = theme;

      return <View />;
    };

    render(<MakeComponent />);

    // JW Palette colors
    expect(themeFromProvider).toHaveProperty('palette');
    // JW Typography
    expect(themeFromProvider).toHaveProperty('typography');
    // JW Spacing
    expect(themeFromProvider).toHaveProperty('spacing');
    // JW Shape
    expect(themeFromProvider).toHaveProperty('shape');
  });
});
