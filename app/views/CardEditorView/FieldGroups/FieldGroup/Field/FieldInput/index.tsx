import React from 'react';
import { ColorInput } from './ColorInput';
import { ColorPalletteInput } from './ColorPalletteInput';
import { EmailInput } from './EmailInput';
import { ImageInput } from './ImageInput';
import { LinkInput } from './LinkInput';
import { NumberInput } from './NumberInput';
import { TextInput } from './TextInput';
import { UnknownInput } from './UnknownInput';

const InputTable = {
  TextInput,
  EmailInput,
  LinkInput,
  ColorInput,
  ImageInput,
  NumberInput,
  ColorPalletteInput
};

type Props = {
  type: string;
  value: any;
  onChange: (value: any) => void;
};

export const FieldInput = ({ type, value, onChange }: Props) => {
  const Input = InputTable[type as keyof typeof InputTable] || UnknownInput;
  return <Input value={value} onChange={onChange} />;
};
