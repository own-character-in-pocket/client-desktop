import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

const Layout = styled.input`
  width: 100%;

  border-bottom: 1px solid hsl(0, 0%, 84%);

  &:hover,
  &:focus {
    border-bottom: 1px solid hsl(0, 0%, 64%);
  }
`;

type Props = {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
};

const NO_OPERATION = () => {};

export const InputText = ({ value, placeholder, onChange = NO_OPERATION }: Props) => {
  const change = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return <Layout value={value} placeholder={placeholder} onChange={change} />;
};
