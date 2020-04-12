import { enableMapSet } from 'immer';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
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

document.addEventListener('DOMContentLoaded', () => {
  const app = (
    <AppContainer>
      <App />
    </AppContainer>
  );
  ReactDOM.render(app, Root);
});
