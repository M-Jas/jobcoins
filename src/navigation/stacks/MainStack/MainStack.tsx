import useTheme from '@contexts/ThemeContext';
import React from 'react';
import HomeScreen from '@screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MainStack = ({ ...other }) => {
  const { palette } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        // ...defaultScreenOptions,
        headerShown: false,
      }}
      {...other}
    >
      <Stack.Group>
        <Stack.Screen name={HomeScreen.name} component={HomeScreen.component} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

MainStack.defaultProps = {
  testID: 'MainStack',
};

export default MainStack;
