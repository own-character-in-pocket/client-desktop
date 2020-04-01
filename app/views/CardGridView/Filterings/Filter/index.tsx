import { InputText } from '@app/atomics/InputText';
import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.div``;

export enum FilterType {
  Text,
  Number
}

type Props = {
  type: FilterType;
  label: string;
  value: any;
};

export const Filter = ({ type, label, value }: Props) => (
  <Layout>
    <Label>{label}</Label>
    <InputText value={value} onChange={console.log} />
  </Layout>
);
