import { FieldGroupModel } from '@app/models';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Field } from './Field';
import { FieldHeading } from './FieldHeading';

const Layout = styled.div`
  padding: 0.5rem;

  border-radius: 0.25rem;

  &:hover {
    border-radius: 0.25rem;
    background-color: hsl(0, 0%, 96%);
  }
`;

const FieldList = styled.div`
  display: grid;
  grid-gap: 0.5rem;

  margin-top: 0.5rem;
`;

type Props = {
  index: number;
  isAlone: boolean;
  model: FieldGroupModel;
};

export const FieldGroup = ({ index: groupIndex, isAlone, model }: Props) => {
  const [isFolded, setBeFolded] = useState(true);

  const toggleToFold = () => setBeFolded(isFolded => !isFolded);

  return (
    <Layout>
      <FieldHeading index={groupIndex} displayName={model.displayName} isFolded={isFolded} isAlone={isAlone} toggleToFold={toggleToFold} />
      {isFolded && (
        <FieldList>
          {model.fieldList.map((field, index) => (
            <Field key={index} groupIndex={groupIndex} index={index} isAlone={model.fieldList.length === 1} model={field} />
          ))}
        </FieldList>
      )}
    </Layout>
  );
};
