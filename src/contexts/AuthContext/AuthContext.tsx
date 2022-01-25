// Libs
import { useContext, createContext } from 'react';

export const AuthContext = createContext({
  signIn: () => {},
  signOut: () => {},
  signUp: () => {},
});

export default function useAuthContext() {
  return useContext(AuthContext);
}
