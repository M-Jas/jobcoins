import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import mergeStyles from '../mergeStyles';
import { StylesHook, StylesOrCreator } from '../types';
import useTheme from '../useTheme';

/**
 * makeStyles: is a custom hook that takes either a styles object {color: 'red'} or
 * a callback function that provides the theme(optional) from context and props(optional) from the parent
 *
 * It Returns: a hook that builds out an object containing the styles applied to the component directly
 * or props via the parent component
 *
 * What does this solve:
 * Engineers now have access a single source theme & can provide styles to children
 * components without creating Massive Prop Nightmare.
 *
 * This will help increase performance with the use of memoization and StyleSheet creation
 *
 * Reduces the amount of import statements to grab the static theme or static tokens
 *
 */

function makeStyles<
  T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>,
>(stylesOrCreator: StylesOrCreator<T>): StylesHook<T> {
  return (props = {}) => {
    const theme = useTheme();

    return useMemo(() => {
      const styles =
        typeof stylesOrCreator === 'function'
          ? stylesOrCreator(theme, props)
          : stylesOrCreator;

      const styleSheet = StyleSheet.create(styles);

      return mergeStyles(styleSheet, props.styles);
    }, [theme, props]);
  };
}

export default makeStyles;
