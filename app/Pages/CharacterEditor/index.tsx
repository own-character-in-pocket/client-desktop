import React from 'react';
import styled from 'styled-components';
import { Memo } from './Memo';
import { Profile } from './Profile';
import { Relationships } from './Relationships';
import { StoreProvider } from './Store';
import { Story } from './Story';
import { Thumbnail } from './Thumbnail';
import { Tags } from './Tags';

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

const ProfileLayout = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: min-content 1fr;
`;

const Bottom = styled.div``;

export const CharacterEditor = () => (
  <StoreProvider>
    <Layout>
      <Top>
        <ProfileLayout>
          <Thumbnail />
          <Profile />
        </ProfileLayout>
        <Tags />
        <Story />
        <Memo />
      </Top>

      <Bottom>
        <Relationships />
      </Bottom>
    </Layout>
  </StoreProvider>
);
