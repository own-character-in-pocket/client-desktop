import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

const Layout = styled.input``;

type Props = {
  value: string;
  onChange: (value: number) => void;
};

export const NumberInput = ({ value, onChange }: Props) => {
  const updateNumber = (event: ChangeEvent<HTMLInputElement>) => {
    const value = +event.target.value;
    onChange(value);
  };

  return <Layout type="number" value={value} onChange={updateNumber} />;
};
