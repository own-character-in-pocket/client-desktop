import { enableMapSet } from 'immer';
import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import { MemoryRouter } from 'react-router-dom';
import 'reflect-metadata';
import { RootLayout } from './layouts/RootLayout';
import { AppStoreProvider } from './store';
import './styles';
import { Views } from './views';

enableMapSet();

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

const App = () => (
  <MemoryRouter>
    <AppStoreProvider>
      <RootLayout>
        <Views />
      </RootLayout>
    </AppStoreProvider>
  </MemoryRouter>
);

declare const Root: HTMLDivElement;

document.addEventListener('DOMContentLoaded', () =>
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    Root
  )
);
