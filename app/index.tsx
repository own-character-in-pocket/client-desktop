import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import { MemoryRouter } from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';
import { Pages } from './pages';
import './styles';

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

const App = () => (
  <MemoryRouter>
    <RootLayout>
      <Pages />
    </RootLayout>
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
