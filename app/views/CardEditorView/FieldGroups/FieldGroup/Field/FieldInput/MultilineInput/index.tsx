import React, { ChangeEvent } from 'react';
import ReactTextarea from 'react-autosize-textarea';
import styled from 'styled-components';

const Layout = styled(ReactTextarea)`
  width: 100%;

  margin: 1px 0;

  border-radius: 0.25rem;
`;

type Props = {
  value: string;
  isReadonly: boolean;
  onChange: (value: string) => void;
};

export const MultilineInput = ({ value, isReadonly, onChange }: Props) => {
  const updateText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    onChange(value);
  };

  return <Layout value={value} readOnly={isReadonly} onChange={updateText} />;
};
