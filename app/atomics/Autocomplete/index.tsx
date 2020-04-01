import React, { useState } from 'react';
import ReactSelect, { InputActionMeta } from 'react-select';
import { None } from '../None';

const NO_OPERATION = () => {};

type Option = any;

type Props = {
  className?: string;
  placeholder?: string;
  defaultOption?: Option;
  options?: Option[];
  onInputChange?: (inputValue: string) => void;
  onChange?: (option: Option) => void;
};

export const Autocomplete = ({ className, placeholder, defaultOption, options, onInputChange = NO_OPERATION, onChange }: Props) => {
  const [inputValue, setInputValue] = useState('');

  const updateInputValue = (inputValue: string, actionMeta: InputActionMeta) => {
    switch (actionMeta.action) {
      case 'input-change': {
        setInputValue(inputValue);
        return;
      }
      case 'set-value': {
        onInputChange(inputValue);
        return;
      }
    }
  };

  return (
    <ReactSelect
      className={className}
      isClearable={false}
      placeholder={placeholder}
      value={defaultOption}
      options={options}
      inputValue={inputValue}
      components={{ IndicatorSeparator: None }}
      styles={{
        control: style => ({
          ...style,
          cursor: 'text',
          minHeight: 'initial',
          border: 0,
          boxShadow: 'inset 0 0 0 1px hsl(0, 0%, 84%)'
        }),
        placeholder: style => ({
          ...style,
          margin: 0,
          padding: '0 0.25rem'
        }),
        input: style => ({
          ...style,
          margin: 0,
          padding: '0 0.25rem'
        }),
        valueContainer: style => ({
          ...style,
          padding: 0
        }),
        dropdownIndicator: style => ({
          ...style,
          cursor: 'pointer',
          padding: 0
        })
      }}
      onInputChange={updateInputValue}
      onChange={onChange}
    />
  );
};
