// Libs
import makeStyles from '@styles/makeStyles';
import React from 'react';
import {
  Button as RNEButton,
  ButtonProps as RNEButtonProps,
} from 'react-native-elements';

/**
 * TODO: (MJ)
 *
 * - Add tests
 * - Add Button Component
 *
 */

interface ButtonProps extends RNEButtonProps {
  color?: string;
}

const Button = (props: ButtonProps) => {
  const { ...other } = props;
  const styles = useStyles(props);

  return (
    <RNEButton
      type="outline"
      loadingProps={styles.activity}
      buttonStyle={styles.button}
      containerStyle={styles.container}
      titleStyle={styles.title}
      {...other}
    />
  );
};

const useStyles = makeStyles(
  ({ palette, shape, spacing, typography }, props) => {
    return {
      button: {
        backgroundColor: props.color || palette?.primary,
        borderRadius: shape.borderRadius,
        padding: spacing.unit,
      },
      container: {
        borderRadius: shape?.borderRadius,
      },
      title: {
        ...typography.labelBold,
        color: palette.white,
      },
      activity: {
        color: palette.white,
      },
    };
  },
);

export default Button;
