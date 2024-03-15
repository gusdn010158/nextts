'use client';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { PropsWithChildren } from 'react';

export const Root = ({ children }: PropsWithChildren<{}>) => {
  return <Provider store={store}>{children}</Provider>;
};
