import React from 'react';
import styled from 'styled-components';
import { Personality } from './Personality';
import { Profile } from './Profile';
import { Relationships } from './Relationships';
import { Provider } from './Store';
import { Story } from './Story';
import { Thumbnail } from './Thumbnail';

const Layout = styled.div``;

export const CharacterEditor = () => (
  <Provider>
    <Layout>
      <Thumbnail />
      <Profile />
      <Personality />
      <Story />
      <Relationships />
    </Layout>
  </Provider>
);
