import { None } from '@app/atomics/None';
import { useAppSelector } from '@app/store';
import { useDispatch } from '@app/views/CardEditorView/Store';
import { CardAction } from '@app/views/CardEditorView/Store/Card';
import React, { useState } from 'react';
import ReactSelect, { InputActionMeta } from 'react-select';

export const CardType = () => {
  const cardTypes = useAppSelector(store => store.Card);
  const dispatch = useDispatch();
  const [cardType, setCardType] = useState('');

  const updateCardType = (cardType: string, actionMeta: InputActionMeta) => {
    switch (actionMeta.action) {
      case 'input-change': {
        setCardType(cardType);
        return;
      }
      case 'set-value': {
        // dispatch(CardAction.setCardTypeId(cardType));
        return;
      }
    }
  };

  return (
    <ReactSelect
      isClearable={false}
      inputValue={cardType}
      components={{
        IndicatorSeparator: None
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
        })
      }}
      onInputChange={updateCardType}
    />
  );
};
