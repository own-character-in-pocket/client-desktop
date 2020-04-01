import { CardModel } from '@app/models/Card';
import { SimpleCard } from '@app/molecules/SimpleCard';
import React from 'react';
import styled from 'styled-components';
import { CardType } from './CardType';

const Layout = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: min-content 1fr;
`;

const Left = styled.div`
  width: 12rem;
`;

const Right = styled.div`
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 0.5rem;
  grid-template-columns: min-content 1fr;

  height: min-content;
`;

const TextInput = styled.input`
  padding: 0 0.25rem;

  border-radius: 0.25rem;
  box-shadow: inset 0 0 0 1px hsl(0, 0%, 84%);
`;

const ImageInput = styled.input`
  cursor: pointer;
`;

export const Thumbnail = () => (
  <Layout>
    <Left>
      <SimpleCard model={CardModel.of({ displayName: 'Danuel' })} />
    </Left>
    <Right>
      <div>카드 타입</div>
      <CardType />
      <div>카드 이름</div>
      <TextInput placeholder="Danuel" />
      <div>배경색</div>
      <TextInput value="hsl(210, 100%, 84%)" />
      <div>이미지</div>
      <ImageInput type="file" />
    </Right>
  </Layout>
);
