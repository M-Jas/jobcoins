import useAuthContext from '@contexts/AuthContext';
import { StatusBar, View } from 'react-native';
import useTheme from '@styles/useTheme';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import AuthenticationStack from '../stacks/AuthenticationStack';
import React from 'react';

const Navigator = ({ ...other }) => {
  const { palette } = useTheme();
  /** Our authstate/current member */
  const { authToken } = useAuthContext();

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
        {!authToken ? <AuthenticationStack /> : <View />}
      </NavigationContainer>
    </>
  );
};

Navigator.defaultProps = {
  testID: 'Navigator',
};

export default Navigator;
