import React from 'react';
import styled from 'styled-components';
import EggIcon from '../../../../assets/icons/egg.svg';

const Layout = styled.div``;

const Image = styled.img`
  overflow: hidden;

  width: 8rem;
  height: 8rem;

  border-radius: 0.25rem;
  box-shadow: inset 0 0 0 1px hsl(0, 0%, 84%);
  background-color: hsl(210, 100%, 84%);
`;

export const Thumbnail = () => (
  <Layout>
    <Image src={EggIcon} />
  </Layout>
);
