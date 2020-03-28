import React from 'react';
import styled from 'styled-components';
import { Characters } from './Characters';
import { Filterings } from './Filterings';
import { Provider } from './Store';
import { Universe } from './Universe';

const Layout = styled.div`
  display: grid;
  grid-template:
    'Universe Characters' min-content
    'Filterings Characters' 1fr
    / min-content 1fr;

  width: 100%;
  height: 100%;
`;

const UniverseLayout = styled.div`
  grid-area: Universe;
`;

const FilteringsLayout = styled.div`
  grid-area: Filterings;
`;

const CharactersLayout = styled.div`
  overflow-y: auto;

  grid-area: Characters;
`;

export const Main = () => (
  <Provider>
    <Layout>
      <UniverseLayout>
        <Universe />
      </UniverseLayout>
      <FilteringsLayout>
        <Filterings />
      </FilteringsLayout>
      <CharactersLayout>
        <Characters />
      </CharactersLayout>
    </Layout>
  </Provider>
);
