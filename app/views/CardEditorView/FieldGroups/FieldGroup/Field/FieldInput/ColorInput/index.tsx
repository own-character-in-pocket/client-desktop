import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

const Layout = styled.input``;

type Color = string;

type Props = {
  value: string;
  isReadonly: boolean;
  onChange: (value: Color) => void;
};

export const ColorInput = ({ value, isReadonly, onChange }: Props) => {
  const updateColor = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onChange(value);
  };

  return <Layout type="color" value={value} readOnly={isReadonly} onChange={updateColor} />;
};
