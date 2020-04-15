import ChevronBottom from '@app/assets/icons/chevron-bottom.svg';
import { Color, Size } from '@app/constants/CSSVariables';
import React from 'react';
import ReactSelectNoncreatable, { components, InputActionMeta } from 'react-select';
import ReactSelectCreatable from 'react-select/creatable';
import styled from 'styled-components';
import { None } from '../None';

const Image = styled.img`
  width: 1.5rem;
  height: 1.5rem;

  padding: 0.25rem;
`;

const NO_OPERATION = () => {};

type Option = any;

type Props = {
  className?: string;
  isReadonly?: boolean;
  isCreateable?: boolean;
  placeholder?: string;
  inputValue?: string;
  defaultOption?: Option;
  options?: Option[];
  onInputChange?: (inputValue: string) => void;
  onChange?: (option: Option) => void;
};

export const Autocomplete = ({
  className,
  isReadonly,
  isCreateable,
  placeholder,
  inputValue,
  defaultOption,
  options,
  onInputChange = NO_OPERATION,
  onChange
}: Props) => {
  const updateInputValue = (inputValue: string, actionMeta: InputActionMeta) => {
    switch (actionMeta.action) {
      case 'set-value': {
        onInputChange(inputValue);
        return;
      }
    }
  };

  const ReactSelect: typeof ReactSelectNoncreatable = isCreateable ? (ReactSelectCreatable as any) : ReactSelectNoncreatable;

  return (
    <ReactSelect
      className={className}
      isDisabled={isReadonly}
      isClearable={false}
      placeholder={placeholder}
      value={defaultOption}
      inputValue={inputValue}
      options={options}
      onInputChange={updateInputValue}
      onChange={onChange}
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
          height: '1.5rem',
          border: 0,
          boxShadow: `inset 0 0 0 ${Size.BoxShadowThickness} ${Color.BoxShadowHover}`
        }),
        placeholder: style => ({
          ...style,
          margin: 0
        }),
        input: style => ({
          ...style,
          margin: 0,
          paddingTop: 0,
          paddingBottom: 0
        }),
        singleValue: style => ({
          ...style,
          margin: 0
        }),
        valueContainer: style => ({
          ...style,
          padding: '0 0.25rem'
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
        }),
        option: style => ({
          ...style,
          padding: '0 0.25rem',
          textAlign: 'initial'
        })
      }}
    />
  );
};
