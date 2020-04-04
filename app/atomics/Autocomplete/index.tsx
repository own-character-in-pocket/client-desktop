import React, { useState } from 'react';
import ReactSelect, { InputActionMeta, components } from 'react-select';
import { None } from '../None';
import ChevronBottom from '@app/assets/icons/chevron-bottom.svg';
import styled from 'styled-components';

const Image = styled.img`
  width: 1.5rem;
  height: 1.5rem;

  padding: 0.25rem;
`;

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
      components={{
        IndicatorSeparator: None,
        DropdownIndicator: (props: any) => (
          <components.DropdownIndicator {...props}>
            <Image src={ChevronBottom} />
          </components.DropdownIndicator>
        )
      }}
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
        }),
        noOptionsMessage: style => ({
          ...style,
          padding: '0 0.25rem',
          textAlign: 'initial'
        })
      }}
      onInputChange={updateInputValue}
      onChange={onChange}
    />
  );
};
