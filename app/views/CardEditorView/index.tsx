import React from 'react';
import styled from 'styled-components';
import { CardData } from './CardData';
import { FieldGroups } from './FieldGroups';
import { Relationships } from './Relationships';
import { StoreProvider } from './Store';

const Layout = styled.div`
  padding: 0.5rem;
`;

const Top = styled.div`
  display: grid;
  grid-gap: 1rem;

  max-width: 24rem;
  width: 100%;

  padding: 0.5rem;
`;

const Center = styled.div``;

const Bottom = styled.div`
  padding: 0.5rem;
`;

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
