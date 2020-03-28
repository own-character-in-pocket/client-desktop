import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.div``;

const Value = styled.input`
  width: 100%;

  border-bottom: 1px solid hsl(0, 0%, 64%);

  &:hover,
  &:focus {
    border-bottom: 1px solid hsl(0, 0%, 36%);
  }
`;

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
    <Value value={value} onChange={console.log} />
  </Layout>
);
