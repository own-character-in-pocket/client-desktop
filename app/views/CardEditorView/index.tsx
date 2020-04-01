import React from 'react';
import styled from 'styled-components';
import { Relationships } from './Relationships';
import { StoreProvider } from './Store';
import { CardData } from './CardData';
import { FieldGroups } from './FieldGroups';

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

const Center = styled.div``;

const Bottom = styled.div``;

export const CardEditorView = () => (
  <StoreProvider>
    <Layout>
      <Top>
        <CardData />
      </Top>

      <Center>
        <FieldGroups />
      </Center>

      <Bottom>
        <Relationships />
      </Bottom>
    </Layout>
  </StoreProvider>
);
