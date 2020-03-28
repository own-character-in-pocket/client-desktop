import React from 'react';
import styled from 'styled-components';
import { Description } from './Description';
import { Tags } from './Tags';

const Layout = styled.div``;

export const Personality = () => (
  <Layout>
    <Tags />
    <Description />
  </Layout>
);
