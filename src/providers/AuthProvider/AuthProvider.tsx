// Libs
import React, { useEffect, useMemo, useReducer } from 'react';
import { AuthContext } from '@contexts/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Types
import { ActionType, AuthState, AuthAction } from '@types/auth';

const TOKEN_STORAGE_KEY = 'ACCESS_TOKEN';

interface AuthProviderProps {
  children: React.ReactChild;
}

const reducer = (state: AuthState, action: AuthAction) => {
  const { accessToken, userAddress, type } = action;

  switch (type) {
    case ActionType.Initialize:
      return {
        ...state,
        isLoading: false,
        accessToken,
      };
    case ActionType.SignIn:
      return {
        ...state,
        isLoading: false,
        accessToken,
        userAddress,
      };
    case ActionType.SignOut:
      return {
        ...state,
        isLoading: false,
        accessToken: null,
        userAddress: null,
      };
    // case ActionType.Register:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     userAddress: userAddress,
    //     credentials: {
    //       ...state.credentials,
    //       accessToken: credentials?.accessToken,
    //     },
    //   };
    default:
      return state;
  }
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: true,
    accessToken: null,
  });

  const actions = useMemo(
    () => ({
      initialize: async () => {
        // Check if the current user has a Access Token
        const accessToken = await AsyncStorage.getItem(TOKEN_STORAGE_KEY);

        dispatch({
          type: ActionType.Initialize,
          accessToken,
        });
      },
      signIn: async (userAddress: string) => {
        /**
         * TODO: (MJ) Check if the address is in the database
         */
        let accessToken = null;

        if (userAddress === 'MJ_ADDRESS') {
          accessToken = 'Test-Token-1';

          await AsyncStorage.setItem(TOKEN_STORAGE_KEY, accessToken);
        }

        dispatch({
          type: ActionType.SignIn,
          userAddress,
          accessToken,
        });
      },
      signOut: async () => {
        await AsyncStorage.removeItem(TOKEN_STORAGE_KEY);
        dispatch({
          type: ActionType.SignOut,
          accessToken: null,
          userAddress: null,
        });
      },
    }),
    [],
  );

  const value = useMemo(
    () => ({
      authActions: actions,
      authState: state,
    }),
    [state, actions],
  );

  useEffect(() => {
    const bootstrapAuth = async () => {
      await actions.initialize();
    };

    bootstrapAuth();
  }, [actions]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
