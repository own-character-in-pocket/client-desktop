import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  padding-left: 4rem;
`;

type Props = {
  children: ReactNode;
};

export const Main = ({ children }: Props) => <Layout>{children}</Layout>;
