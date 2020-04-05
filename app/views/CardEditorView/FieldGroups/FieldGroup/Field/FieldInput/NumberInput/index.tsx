import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

const Layout = styled.input``;

type Props = {
  value: string;
  isReadonly: boolean;
  onChange: (value: number) => void;
};

export const NumberInput = ({ value, isReadonly, onChange }: Props) => {
  const updateNumber = (event: ChangeEvent<HTMLInputElement>) => {
    const value = +event.target.value;
    onChange(value);
  };

  return <Layout type="number" value={value} readOnly={isReadonly} onChange={updateNumber} />;
};
