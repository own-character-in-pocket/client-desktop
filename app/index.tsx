import { enableMapSet } from 'immer';
import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import { MemoryRouter } from 'react-router-dom';
import 'reflect-metadata';
import { RootLayout } from './layouts/RootLayout';
import { Pages } from './pages';
import { AppStoreProvider } from './store';
import './styles';

enableMapSet();

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

const App = () => (
  <MemoryRouter>
    <AppStoreProvider>
      <RootLayout>
        <Pages />
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
