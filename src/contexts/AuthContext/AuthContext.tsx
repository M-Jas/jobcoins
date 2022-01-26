// Libs
import { useContext, createContext } from 'react';

// Types
import { AuthState, AuthActions } from '@types/auth';

interface AuthContextValue {
  authActions: AuthActions;
  authState: AuthState;
}

const DefaultAuthContextValue = {
  authActions: {
    initialize: () => Promise.resolve(),
    signIn: () => Promise.resolve(),
    signOut: () => Promise.resolve(),
  },
  authState: {
    isLoading: true,
    userAddress: null,
    accessToken: null,
  },
};

export const AuthContext = createContext<AuthContextValue>(
  DefaultAuthContextValue,
);

export default function useAuthContext() {
  return useContext(AuthContext);
}
