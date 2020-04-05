import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

const Layout = styled.textarea`
  width: 100%;

  margin: 1px 0;
  padding: 0 0.25rem;

  border-radius: 0.25rem;
`;

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const MultilineInput = ({ value, onChange }: Props) => {
  const updateText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    onChange(value);
  };

  return <Layout value={value} onChange={updateText} />;
};
