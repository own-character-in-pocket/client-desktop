import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { Pages } from './pages';
import './styles';

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

const App = () => (
  <BrowserRouter>
    <Pages />
  </BrowserRouter>
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
