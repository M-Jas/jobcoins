import { Shape } from '@styles/createShape';
import React, { PropsWithChildren } from 'react';
import { StyleSheet, ViewProps } from 'react-native';
import 'react-native-elements';
import { Palette } from './createPalette';
import { Spacing } from './createSpacing';
import { Typography } from './createTypography';
import { MergedStyles } from './mergeStyles';

export interface Theme {
  palette: Palette;
  shape: Shape;
  spacing: Spacing;
  typography: Typography;
}

/**
 * CreateStylesCallback: used for accessing the theme and/or props
 * while creating styles for a component.
 *
 * The Generic Type comes from what `StyleSheet.create` returns
 * which is what this type will be returning.
 * Only used for defining the StylesOrCreator type below
 */
type CreateStylesCallback<
  T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>,
> = (theme: Theme, props?: any) => T;

/**
 * Styles: is either a style object(w/o using StyleSheet.create) or
 * it can be a named styles from Stylesheet
 *
 * Only used for defining the StylesOrCreator type below
 */
export type Styles<T> = T | StyleSheet.NamedStyles<T>;

/**
 * StylesOrCreator: is the argument type `makeCreateStyles` takes.
 * The engineer can either pass in a plan styles object *** MICHAEL TEST PASSING IN AN OBJECT
 * or a callback function that provides the theme and props(from the parents)
 * as props we can use to define the styles of the component.
 */
export type StylesOrCreator<T> = Styles<T> | CreateStylesCallback<T>;

/**
 * StylesProp: can be used when defining a new component
 * Each property can be an Array of any styles or an object
 *
 * Use this props on a child component when we are passing
 * a styles props from the parent to a child
 */
export type StylesProp = { [key: string]: Array<any> | {} };

/**
 * StylesHook: type used to define what we are returning from makeStyles hook
 *
 * This type should only used once for makeStyles
 */
export type StylesHook<T> = (props?: any) => MergedStyles<T>;

/**
 * StyledView: gives the component all of the types and props
 * associated with Functional Components & ViewProps from React Native.
 * Our StylesProp is also included to remove the dependency of manually
 * adding the styles prop to the interface.
 *
 * ex:
 * interface Props {}
 *
 * const TestComponent: StyledView<Props> = (props) => <View style={styles}>{children}</View>
 *
 */
export type StyledView<T = {}> = React.FC<
  ViewProps & { styles?: StylesProp } & T
>;

export type StyledViewProps<T = {}> = PropsWithChildren<T> &
  ViewProps & { styles?: StylesProp } & T;
