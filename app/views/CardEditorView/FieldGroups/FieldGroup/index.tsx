import React, { useState } from 'react';
import styled from 'styled-components';
import { CardFieldGroupModel } from '@app/models/CardFieldGroup';
import { Field } from './Field';
import ChevronBottomIcon from '@app/assets/icons/chevron-bottom.svg';
import ChevronUpIcon from '@app/assets/icons/chevron-up.svg';

const Layout = styled.div`
  padding: 0.5rem;

  border-radius: 0.25rem;

  &:hover {
    border-radius: 0.25rem;
    background-color: hsl(0, 0%, 96%);
  }
`;

const HeadingContainer = styled.div``;

const FoldButton = styled.button``;

const FoldIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const Heading = styled.input`
  margin-left: 0.5rem;
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

export const FieldGroup = ({ model }: Props) => {
  const [isFolded, setBeFolded] = useState(true);

  const toggleToFold = () => setBeFolded(isFolded => !isFolded);

  return (
    <Layout>
      <HeadingContainer>
        <FoldButton onClick={toggleToFold}>
          <FoldIcon src={isFolded ? ChevronBottomIcon : ChevronUpIcon} />
        </FoldButton>
        <Heading placeholder="그룹" />
      </HeadingContainer>

      {isFolded && (
        <FieldList>
          {model.fieldList.map((field, index) => (
            <Field key={index} model={field} />
          ))}
        </FieldList>
      )}
    </Layout>
  );
};
