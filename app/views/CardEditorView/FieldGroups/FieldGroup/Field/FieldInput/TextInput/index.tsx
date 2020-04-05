import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

const Layout = styled.input``;

type Props = {
  value: string;
  isReadonly: boolean;
  onChange: (value: string) => void;
};

export const TextInput = ({ value, isReadonly, onChange }: Props) => {
  const updateText = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onChange(value);
  };

  return <Layout type="text" value={value} readOnly={isReadonly} onChange={updateText} />;
};
