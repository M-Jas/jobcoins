// Libs
import { useContext, createContext } from 'react';

interface AuthActions {
  signIn: (userAddress: string) => void;
  signOut: () => void;
  auth: () => void;
}

interface AuthCredentials {
  accessToken: string;
  userAddress: string;
}

interface AuthState {
  isLoading: boolean;
  credentials: AuthCredentials | null;
}

interface AuthContextValue {
  actions: AuthActions;
  state: AuthState;
}

const DefaultAuthContextValue = {
  actions: {
    signIn: () => {},
    signOut: () => {},
    auth: () => {},
  },
  state: {
    isLoading: true,
    credentials: null,
  },
};

export const AuthContext = createContext<AuthContextValue>(
  DefaultAuthContextValue,
);

export default function useAuthContext() {
  return useContext(AuthContext);
}
