// Libs
import React, { useCallback, useState } from 'react';

// UI
import { Input as RNEInput, InputProps } from 'react-native-elements';

import { TextInputProps } from 'react-native';
import makeStyles from '@styles/makeStyles';

type OwnProps = Omit<InputProps, 'autoCompleteType'>;

/**
 * TODO: (MJ)
 *
 * - Add Error Props
 * - Fix issues with types
 * - Add tests
 *
 */

interface Props extends TextInputProps {}

const Input = (props: Props) => {
  const { onFocus, onBlur } = props;
  const styles = useStyles();
  const [labelStyle, setLabelStyle] = useState<{}>(styles.label);
  const [inputContainerStyle, setInputContainerStyle] = useState<{}>(
    styles.inputContainer,
  );

  const handleFocus = useCallback(
    e => {
      onFocus?.(e);

      setInputContainerStyle(prevState => [
        prevState,
        styles.focusedInputContainer,
      ]);

      setLabelStyle(prevState => [prevState, styles.focusedLabel]);
    },
    [styles, onFocus],
  );

  const handleBlur = useCallback(
    e => {
      onBlur?.(e);

      setInputContainerStyle(styles.inputContainer);
      setLabelStyle(styles.label);
    },
    [styles, onBlur],
  );

  return (
    <RNEInput
      placeholder="Address"
      label="Your Address Key"
      onFocus={handleFocus}
      onBlur={handleBlur}
      containerStyle={styles.container}
      inputStyle={styles.input}
      labelStyle={labelStyle}
      inputContainerStyle={inputContainerStyle}
    />
  );
};

const useStyles = makeStyles(({ palette, spacing, typography }) => ({
  container: {
    paddingHorizontal: 0,
    marginVertical: spacing?.unit,
  },
  inputContainer: {
    borderBottomWidth: 1,
  },
  label: {
    ...typography.paragraphBold,
  },
  focusedLabel: {
    color: palette.primary,
  },
  focusedInputContainer: {
    borderColor: palette.primary,
    borderBottomWidth: 2,
  },
  input: {
    ...typography.paragraph,
  },
}));

export default Input;
