import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  width: min-content;
`;

type Color = string;

type Props = {
  value: string;
  isReadonly: boolean;
  onChange: (value: Color) => void;
};

export const ColorPaletteInput = ({ value, isReadonly, onChange }: Props) => {
  const updateColor = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onChange(value);
  };

  return (
    <Layout>
      <Input type="color" value={value} readOnly={isReadonly} onChange={updateColor} />
    </Layout>
  );
};
