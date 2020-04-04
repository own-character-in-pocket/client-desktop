import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  overflow: hidden;

  padding-left: 4rem;

  white-space: normal;
`;

type Props = {
  children: ReactNode;
};

export const Main = ({ children }: Props) => <Layout>{children}</Layout>;
