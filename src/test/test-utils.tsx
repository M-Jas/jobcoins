import {
  render as rntlrender,
  RenderAPI,
  RenderOptions,
} from '@testing-library/react-native';
import React from 'react';
import DefaultProviders from './DefaultProviders';

interface IWrapperProps {
  children: React.ReactElement;
}

interface ICustomRenderOptions extends RenderOptions {}

type CustomRender = (
  component: React.ReactElement<any>,
  options?: ICustomRenderOptions,
) => RenderAPI;

const render: CustomRender = (component, { ...renderOptions } = {}) => {
  function Wrapper({ children }: IWrapperProps) {
    return <DefaultProviders>{children}</DefaultProviders>;
  }

  return rntlrender(component, { wrapper: Wrapper, ...renderOptions });
};

export * from '@testing-library/react-native';
export { render };
