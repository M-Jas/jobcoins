import useTheme from '@contexts/ThemeContext';
import React from 'react';
import LoginScreen from '@screens/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuthenticationStack = ({ ...other }) => {
  const { palette } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        // ...defaultScreenOptions,
        headerShown: false,
      }}
      {...other}
    >
      {/* Push Authentication Screens */}
      <Stack.Group>
        <Stack.Screen
          name={LoginScreen.name}
          component={LoginScreen.component}
        />
      </Stack.Group>

      {/* Modal Help Screens */}
      {/* <Stack.Group */}
      {/* screenOptions={({ navigation }) => ({ */}
      {/* presentation: 'modal', */}
      {/* headerShown: true, */}
      {/* //   headerLeft: () => ( */}
      {/* //     <HeaderLeft name={JwIconName.Close} onPress={navigation.goBack} /> */}
      {/* //   ), */}
      {/* })} */}
      {/* /> */}
    </Stack.Navigator>
  );
};

AuthenticationStack.defaultProps = {
  testID: 'AuthenticationStack',
};

export default AuthenticationStack;
