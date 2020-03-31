import React from 'react';
import styled from 'styled-components';
import { Cards } from './Cards';
import { Filterings } from './Filterings';

const Layout = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;

  width: 100%;
  height: 100%;
`;

const FilteringsLayout = styled.div``;

const CharactersLayout = styled.div`
  overflow-y: auto;

  height: 100vh;
`;

export const CardGrid = () => (
  <Layout>
    <FilteringsLayout>
      <Filterings />
    </FilteringsLayout>
    <CharactersLayout>
      <Cards />
    </CharactersLayout>
  </Layout>
);
