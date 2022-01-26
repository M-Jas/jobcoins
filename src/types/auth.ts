export enum ActionType {
  Initialize = 'INITIALIZE',
  SignIn = 'SIGN_IN',
  Auth = 'AUTH',
  SignOut = 'SIGN_OUT',
  Register = 'Register',
}

export interface AuthAction {
  type: ActionType;
  userAddress?: string | null;
  accessToken: string | null;
}

export interface AuthCredentials {
  accessToken: string | null;
}

// TODO: Check if isLoading & credentials should be cleaned up
export interface AuthState {
  isLoading: boolean;
  userAddress?: string | null;
  accessToken: string | null;
}
export interface AuthActions {
  initialize: () => Promise<void>;
  signIn: (userAddress: string) => Promise<void>;
  signOut: () => Promise<void>;
}
