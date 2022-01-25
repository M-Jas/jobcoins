import { render } from '@test/test-utils';
import React from 'react';
import { View } from 'react-native';
import { FullTheme } from 'react-native-elements';
import makeStyles from './index';

describe('makeStyles', () => {
  it('returns a function', () => {
    const useStyles = makeStyles({
      root: {
        flex: 1,
      },
    });

    expect(useStyles).toBeInstanceOf(Function);
  });

  it('calls the the creator function when the hook is ran', () => {
    const jestCreatorFn = jest.fn((_theme: FullTheme, _props?: any) => {
      return {
        root: {
          flex: 1,
        },
      };
    });

    const useStyles = makeStyles(jestCreatorFn);

    const MakeComponent = () => {
      useStyles();

      return <View />;
    };

    render(<MakeComponent />);

    expect(jestCreatorFn).toHaveBeenCalled();
  });

  it('should return the same object if called twice because memoization', () => {
    let firstStyles;
    let secondStyles;

    const jestCreatorFn = jest.fn((_theme: FullTheme, _props?: any) => {
      return {
        root: {
          flex: 1,
        },
      };
    });

    const useStyles = makeStyles(jestCreatorFn);

    const MakeComponent = () => {
      firstStyles = useStyles();
      secondStyles = useStyles();

      return <View />;
    };

    render(<MakeComponent />);

    expect(firstStyles).toEqual(secondStyles);
  });
});
