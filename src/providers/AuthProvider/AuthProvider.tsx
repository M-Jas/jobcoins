// Libs
import React, { useEffect, useMemo, useState } from 'react';
import { AuthContext } from '@contexts/AuthContext';

// Types

interface Props {
  children: React.ReactChild;
}

const AuthProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [authToken, setAuthToken] = useState(null);
  useEffect(() => {}, []);

  const auth = useMemo(
    () => ({
      authToken,
      signIn: () => {
        setIsLoading(false);
        setAuthToken('auth token string');
      },
      signOut: () => {
        setIsLoading(false);
        setAuthToken(null);
      },
      signUp: () => {
        setIsLoading(false);
        setAuthToken('sign up auth token string');
      },
    }),
    [authToken],
  );

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
