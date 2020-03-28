import React, { useState } from 'react';
import styled from 'styled-components';
import { Character } from './Character';

const Layout = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));

  padding: 1rem;
`;

export const Characters = () => {
  const [characterList] = useState(() => Array.from({ length: 64 }, () => ({})));
  return (
    <Layout>
      {characterList.map((_, index) => (
        <Character key={index} />
      ))}
    </Layout>
  );
};
