import React from 'react';
import ThemeProvider from '@providers/ThemeProvider';
import AuthProvider from '@providers/AuthProvider';
import Navigator from '@navigation/Navigator';

const App = ({}) => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Navigator />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
