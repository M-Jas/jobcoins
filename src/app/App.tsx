import React from 'react';
import ThemeProvider from '@providers/ThemeProvider';
import AuthProvider from '@providers/AuthProvider';
import Navigator from '@navigation/Navigator';
import { Text, View } from 'react-native';

const App = ({}) => {
  return (
    // <View>
    //   <Text>Hello</Text>
    // </View>
    <AuthProvider>
      <ThemeProvider>
        <Navigator />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
