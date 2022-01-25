import { Styles, StylesProp } from '../types';

export type MergedStyles<T> = { [key in keyof T]: Array<any> };

function mergeStyles<T>(
  styles: Styles<T>,
  propStyles: StylesProp,
): MergedStyles<T> {
  const nextStyles = {} as { [key in keyof T]: Array<any> };

  Object.keys(styles).forEach(key => {
    if (propStyles && propStyles.hasOwnProperty(key)) {
      nextStyles[key as keyof T] = [styles[key as keyof T], propStyles[key]];
    } else {
      nextStyles[key as keyof T] = [styles[key as keyof T]];
    }
  });

  return nextStyles;
}

export default mergeStyles;
