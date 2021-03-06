import { Color, Radius, Size, Swatch } from '@app/constants/CSSVariables';
import { InputType } from '@app/constants/InputType';
import React from 'react';
import styled from 'styled-components';
import { ColorInput } from './ColorInput';
import { ColorPaletteInput } from './ColorPaletteInput';
// import { EmailInput } from './EmailInput';
// import { ImageInput } from './ImageInput';
import { MultilineInput } from './MultilineInput';
// import { LinkInput } from './LinkInput';
import { NumberInput } from './NumberInput';
import { TextInput } from './TextInput';
import { UnknownInput } from './UnknownInput';

const Layout = styled.div`
  padding: 0 0.25rem;

  border-radius: ${Radius.Normal};

  &[data-readonly='false'] {
    box-shadow: inset 0 0 0 ${Size.BoxShadowThickness} ${Color.BoxShadowHover};
    background-color: ${Swatch.White};
  }

  input {
    width: 100%;
    min-height: 1.5rem;
  }
`;

const InputTable = {
  [InputType.Color]: ColorInput,
  [InputType.ColorPalette]: ColorPaletteInput,
  [InputType.Multiline]: MultilineInput,
  [InputType.Number]: NumberInput,
  [InputType.Text]: TextInput
  // EmailInput,
  // LinkInput,
  // ColorInput,
  // ImageInput,
};

type Props = {
  type: keyof typeof InputTable;
  value: any;
  isReadonly: boolean;
  onChange: (value: any) => void;
};

export const FieldInput = ({ type, value, isReadonly, onChange }: Props) => {
  const Input = InputTable[type as keyof typeof InputTable] || UnknownInput;
  return (
    <Layout data-readonly={isReadonly}>
      <Input value={value} isReadonly={isReadonly} onChange={onChange} />
    </Layout>
  );
};
