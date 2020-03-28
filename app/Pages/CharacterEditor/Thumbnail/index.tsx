import React from 'react';
import styled from 'styled-components';
import { ImageChanger } from './ImageChanger';
import EmptyIcon from '../../../assets/icons/egg.svg';

const Layout = styled.div``;

const Image = styled.img`
  width: 8rem;
  height: 8rem;

  border-radius: 4px;
  box-shadow: inset 0 0 0 1px hsl(0, 0%, 84%);
`;

export const Thumbnail = () => (
  <Layout>
    <Image src={EmptyIcon} />
    <ImageChanger />
  </Layout>
);
