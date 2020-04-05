import { Autocomplete } from '@app/atomics/Autocomplete';
import { EntityModel } from '@app/models';
import { SimpleCard } from '@app/molecules/SimpleCard';
import React from 'react';
import styled from 'styled-components';
import { useSelector } from '../../Store';

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
  grid-template-columns: max-content 1fr;

  height: min-content;

  padding: 0.5rem;

  border-radius: 0.25rem;

  transition-property: background-color;

  &:hover {
    background-color: hsl(0, 0%, 96%);
  }
`;

const TextInput = styled.input`
  padding: 0 0.25rem;

  border-radius: 0.25rem;
  box-shadow: inset 0 0 0 1px hsl(0, 0%, 84%);
  background-color: white;
`;

const ImageInput = styled.input`
  cursor: pointer;

  width: 100%;
`;

export const Thumbnail = () => {
  const entity = useSelector(store => store.Entity.current);
  return (
    <Layout>
      <Left>
        <SimpleCard model={entity} />
      </Left>
      <Right>
        <div>카드 타입</div>
        <Autocomplete placeholder="카드 타입" />
        <div>카드 이름</div>
        <TextInput placeholder="카드 이름" />
        <div>배경색</div>
        <TextInput placeholder="hsl(210, 100%, 84%)" />
        <div>이미지</div>
        <ImageInput type="file" />
      </Right>
    </Layout>
  );
};