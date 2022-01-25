/**
 * This file extends the default theme from React Native Elements
 *
 * React Native Elements: https://reactnativeelements.com/docs/customization/#typescript-definitions-extending-the-default-theme
 * Github: https://github.com/react-native-elements/react-native-elements/issues/2310
 */

import 'react-native-elements';
import { Typography } from './createTypography';
import { Palette } from './createPalette';
import { Spacing } from './createSpacing';
import { Shape } from './createShape';

type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

declare module 'react-native-elements' {
  export interface FullTheme {
    palette: Palette;
    shape: Shape;
    spacing: Spacing;
    typography: Typography;
  }
}
