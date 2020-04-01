import { Autocomplete } from '@app/atomics/Autocomplete';
import { CardFieldModel } from '@app/models/CardField';
import React from 'react';
import styled from 'styled-components';
import CrossBlackIcon from '@app/assets/icons/cross-black.svg';
import CrossRedIcon from '@app/assets/icons/cross-red.svg';

const Layout = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 12ch 12ch 1fr 1rem;
  align-items: center;
`;

const TextInput = styled.input`
  padding: 0 0.25rem;

  border-radius: 0.25rem;
  box-shadow: inset 0 0 0 1px hsl(0, 0%, 84%);
  background-color: white;
`;

const DeleteIcon = styled.img`
  cursor: pointer;

  width: 1rem;
  height: 1rem;

  &:hover {
    content: url(${CrossRedIcon});
  }
`;

type Props = {
  model: CardFieldModel;
};

export const Field = ({ model }: Props) => (
  <Layout>
    <Autocomplete placeholder="속성 타입" />
    <TextInput placeholder="속성 이름" />
    <TextInput />
    <DeleteIcon src={CrossBlackIcon} />
  </Layout>
);
