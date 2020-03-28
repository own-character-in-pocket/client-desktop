import React, { useRef } from 'react';
import ReactTextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';

const Layout = styled(ReactTextareaAutosize)`
  width: 100%;
  background-color: transparent;
  border: 1px solid hsl(0, 0%, 84%);
  border-radius: 4px;
  outline: none;
  text-align: left;
  text-transform: none;
  word-break: break-all;
  white-space: pre-wrap;
  overflow: auto;
`;

const NO_OPERATION = () => {};

type Props = {
  value: string;
  maxLength?: number;
  maxRows?: number;
  placeholder?: string;
  onChange?: (value: string) => void;
  onFocus?: (value: string) => void;
  onBlur?: (value: string) => void;
};

export const Multiline = ({
  maxLength,
  maxRows,
  value,
  placeholder,
  onChange = NO_OPERATION,
  onFocus = NO_OPERATION,
  onBlur = NO_OPERATION
}: Props) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  const getValue = () => ref.current!.value;
  const change = () => onChange(getValue());
  const focus = () => onFocus(getValue());
  const blur = () => onBlur(getValue());

  return (
    <Layout
      inputRef={ref}
      value={value}
      placeholder={placeholder}
      spellCheck={false}
      maxLength={maxLength}
      maxRows={maxRows}
      onChange={change}
      onFocus={focus}
      onBlur={blur}
    />
  );
};
