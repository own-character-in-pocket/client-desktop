import React from 'react';
// import { ColorInput } from './ColorInput';
// import { ColorPalletteInput } from './ColorPalletteInput';
// import { EmailInput } from './EmailInput';
// import { ImageInput } from './ImageInput';
// import { LinkInput } from './LinkInput';
// import { NumberInput } from './NumberInput';
import { TextInput } from './TextInput';
import { UnknownInput } from './UnknownInput';
import styled from 'styled-components';
import { InputType } from '@app/constants/InputType';

const Layout = styled.div`
  padding: 0 0.25rem;

  border-radius: 0.25rem;
  box-shadow: inset 0 0 0 1px hsl(0, 0%, 84%);
  background-color: white;

  input {
    width: 100%;
  }
`;

const InputTable = {
  [InputType.Text]: TextInput
  // EmailInput,
  // LinkInput,
  // ColorInput,
  // ImageInput,
  // NumberInput,
  // ColorPalletteInput
};

type Props = {
  type: keyof typeof InputTable;
  value: any;
  onChange: (value: any) => void;
};

export const FieldInput = ({ type, value, onChange }: Props) => {
  const Input = InputTable[type as keyof typeof InputTable] || UnknownInput;
  return (
    <Layout>
      <Input value={value} onChange={onChange} />
    </Layout>
  );
};
