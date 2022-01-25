import ThemeProvider from '@styles/ThemeProvider';
import React from 'react';

export interface IAuthContextActions {
  [key: string]: () => void;
}

interface DefaultProvidersProps {
  children: React.ReactElement;
}

const DefaultProviders = (props: DefaultProvidersProps) => {
  const { children } = props;

  return <ThemeProvider>{children}</ThemeProvider>;
};

export default DefaultProviders;
