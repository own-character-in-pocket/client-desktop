import React from 'react';
import styled from 'styled-components';
import { Relationships } from './Relationships';
import { StoreProvider } from './Store';
import { CardData } from './CardData';

const Layout = styled.div`
  display: grid;
  grid-gap: 1rem;

  padding: 1rem;
`;

const Top = styled.div`
  display: grid;
  grid-gap: 1rem;

  max-width: 24rem;
  width: 100%;
`;

const Bottom = styled.div``;

export const CardEditorView = () => (
  <StoreProvider>
    <Layout>
      <Top>
        <CardData />
      </Top>

      <Bottom>
        <Relationships />
      </Bottom>
    </Layout>
  </StoreProvider>
);
