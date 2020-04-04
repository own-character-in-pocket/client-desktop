import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

const Layout = styled.input``;

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const TextInput = ({ value, onChange }: Props) => {
  const updateText = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onChange(value);
  };

  return <Layout value={value} onChange={updateText} />;
};
