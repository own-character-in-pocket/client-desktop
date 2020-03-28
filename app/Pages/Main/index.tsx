import React from 'react';
import styled from 'styled-components';
import { Characters } from './Characters';
import { Filterings } from './Filterings';
import { Provider } from './Store';

const Layout = styled.div``;

export const Main = () => (
  <Provider>
    <Layout>
      <Filterings />
      <Characters />
    </Layout>
  </Provider>
);
