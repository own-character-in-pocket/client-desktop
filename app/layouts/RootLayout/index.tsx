import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Main } from './Main';
import { Sidebar } from './Sidebar';

const Layout = styled.div``;

type Props = {
  children: ReactNode;
};

export const RootLayout = ({ children }: Props) => (
  <Layout>
    <Sidebar />
    <Main>{children}</Main>
  </Layout>
);
