import React from 'react';
import styled from 'styled-components';
import { CardFieldGroupModel } from '@app/models/CardFieldGroup';
import { Field } from './Field';

const Layout = styled.div`
  padding: 0.5rem;

  border-radius: 0.25rem;

  &:hover {
    border-radius: 0.25rem;
    background-color: hsl(0, 0%, 96%);
  }
`;

const Heading = styled.input`
  padding: 0 0.25rem;

  font-size: 1.25rem;
  font-weight: bolder;
  border-radius: 0.25rem;
  box-shadow: inset 0 0 0 1px hsl(0, 0%, 84%);
  background-color: white;
`;

const FieldList = styled.div`
  display: grid;
  grid-gap: 0.5rem;

  margin-top: 0.5rem;
`;

type Props = {
  model: CardFieldGroupModel;
};

export const FieldGroup = ({ model }: Props) => (
  <Layout>
    <Heading placeholder="그룹" />
    <FieldList>
      {model.fieldList.map((field, index) => (
        <Field key={index} model={field} />
      ))}
    </FieldList>
  </Layout>
);
