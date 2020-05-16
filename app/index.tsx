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
import { request } from './request';

declare const Root: HTMLDivElement;

document.addEventListener('DOMContentLoaded', () => {
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

  const app = (
    <AppContainer>
      <App />
    </AppContainer>
  );
  ReactDOM.render(app, Root);

  const QUERY = `
    query {
      entity(input: { id: 1 }) {
        id
      }
    }
  `;
  request(QUERY)
    .then(console.log)
    .catch(console.error);
});
