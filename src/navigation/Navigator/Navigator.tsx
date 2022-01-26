import useAuthContext from '@contexts/AuthContext';
import { StatusBar } from 'react-native';
import useTheme from '@contexts/ThemeContext';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import AuthenticationStack from '../stacks/AuthenticationStack';
import MainStack from '../stacks/MainStack';
import React from 'react';

const Navigator = ({ ...other }) => {
  const { palette } = useTheme();
  const { authState } = useAuthContext();

  // Before initialization is finished the authState starts empty
  // if (_isEmpty(authState)) {
  //   return null;
  // }
  console.log(authState);
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={palette.white} />
      <NavigationContainer
        theme={{ ...DefaultTheme, colors: { ...DefaultTheme.colors } }}
        {...other}
      >
        {!authState?.accessToken ? <AuthenticationStack /> : <MainStack />}
      </NavigationContainer>
    </>
  );
};

Navigator.defaultProps = {
  testID: 'Navigator',
};

export default Navigator;
