import { Color, Size } from '@app/constants/CSSVariables';
import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

const Layout = styled.input`
  width: 100%;

  border-bottom: ${Size.BorderThickness} solid ${Color.BorderNormal};

  &:hover,
  &:focus {
    border-bottom: ${Size.BorderThickness} solid ${Color.BorderHover};
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
