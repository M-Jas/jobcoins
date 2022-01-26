import useAuthContext from '@contexts/AuthContext';
import { StatusBar, View } from 'react-native';
import useTheme from '@contexts/ThemeContext';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import AuthenticationStack from '../stacks/AuthenticationStack';
import MainStack from '../stacks/MainStack';
import React from 'react';

const Navigator = ({ ...other }) => {
  const { palette } = useTheme();
  const { state } = useAuthContext();

  // Before initialization is finished the authState starts empty
  // if (_isEmpty(authState)) {
  //   return null;
  // }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={palette.white} />
      <NavigationContainer
        theme={{ ...DefaultTheme, colors: { ...DefaultTheme.colors } }}
        {...other}
      >
        {!state?.credentials ? <AuthenticationStack /> : <MainStack />}
      </NavigationContainer>
    </>
  );
};

Navigator.defaultProps = {
  testID: 'Navigator',
};

export default Navigator;
