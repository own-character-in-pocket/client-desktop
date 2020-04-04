import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  padding: 1rem;
`;

const Heading = styled.h2``;

const Subheading = styled.h4``;

export const MainView = () => (
  <Layout>
    <Heading>포켓자캐!</Heading>
    <Subheading>Own Character in Pocket</Subheading>
  </Layout>
);
