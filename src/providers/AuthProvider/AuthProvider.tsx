// Libs
import React, { useEffect, useMemo, useReducer, useState } from 'react';
import { AuthContext } from '@contexts/AuthContext';

// Types

interface Props {
  children: React.ReactChild;
}

interface AuthCredentials {
  accessToken?: string;
  userAddress?: string;
}

interface AuthState {
  isLoading: boolean;
  credentials: AuthCredentials | null;
}

enum ActionType {
  Initialize = 'INITIALIZE',
  SignIn = 'SIGN_IN',
  Auth = 'AUTH',
  SignOut = 'SIGN_OUT',
  Register = 'Register',
}

interface ActionCredentials {
  credentials: AuthCredentials | null;
}

// TODO: Why does this work https://stackoverflow.com/a/59212104
type ActionInterface<T extends string, U> = {
  type: T;
  credentials: U;
};

interface Action {
  type: ActionType;
  credentials: AuthCredentials | null;
}

const reducer = (
  state: AuthState,
  action: Action, //ActionInterface<ActionType, AuthCredentials>,
) => {
  const { credentials, type } = action;

  switch (type) {
    case ActionType.Initialize:
      return {
        ...state,
        isLoading: false,
        credentials: {
          accessToken: credentials?.accessToken,
          userAddress: credentials?.userAddress,
        },
      };
    case ActionType.SignIn:
      return {
        ...state,
        isLoading: false,
        credentials: {
          accessToken: credentials?.accessToken,
          userAddress: credentials?.userAddress,
        },
      };
    case ActionType.SignOut:
      return {
        ...state,
        isLoading: false,
        credentials: null,
      };
    case ActionType.Register:
      return {
        ...state,
        isLoading: false,
        credentials: {
          accessToken: credentials?.accessToken,
          userAddress: credentials?.userAddress,
        },
      };
    default:
      return state;
  }
};

const AuthProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: true,
    credentials: null,
  });

  const actions = useMemo(
    () => ({
      signIn: (userAddress: string) => {
        // Check if the address is in the database
        dispatch({
          type: ActionType.SignIn,
          credentials: { userAddress, accessToken: 'TokenToken' },
        });
      },
      signOut: () => {
        // setIsLoading(false);
        // setAuthToken(null);
        dispatch({
          type: ActionType.SignOut,
          credentials: null,
        });
      },
      auth: () => {},
    }),
    [],
  );

  const value = useMemo(
    () => ({
      actions,
      state,
    }),
    [state, actions],
  );

  useEffect(() => {
    dispatch({ type: ActionType.Initialize, credentials: null });
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
