import CrossBlackIcon from '@app/assets/icons/cross-black.svg';
import CrossRedIcon from '@app/assets/icons/cross-red.svg';
import PlusBlackIcon from '@app/assets/icons/plus-black.svg';
import PlusBlueIcon from '@app/assets/icons/plus-blue.svg';
import { Autocomplete } from '@app/atomics/Autocomplete';
import { Color, Radius, Size, Swatch } from '@app/constants/CSSVariables';
import { InputType } from '@app/constants/InputType';
import { FieldModel } from '@app/models';
import { useStore } from '@app/views/CardEditorView/Store';
import { EntityAction } from '@app/views/CardEditorView/Store/Entity';
import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { FieldInput } from './FieldInput';

const Layout = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 12ch max-content 1.5rem;
  align-items: flex-start;

  &[data-mode='Add'] {
    grid-template-columns: 16ch 16ch 1fr 1.5rem;
  }
`;

const TextInput = styled.input`
  height: 1.5rem;

  padding: 0 0.25rem;

  border-radius: ${Radius.Normal};

  &:not([readonly]) {
    box-shadow: inset 0 0 0 ${Size.BoxShadowThickness} ${Color.BoxShadowHover};
    background-color: ${Swatch.White};
  }
`;

const AddButton = styled.img`
  cursor: pointer;

  width: 1.5rem;
  height: 1.5rem;

  padding: 0.25rem;

  &:hover {
    content: url(${PlusBlueIcon});
  }
`;

const DeleteButton = styled.img`
  cursor: pointer;

  width: 1.5rem;
  height: 1.5rem;

  padding: 0.25rem;

  &:hover {
    content: url(${CrossRedIcon});
  }
`;

const InputTypeList = [
  { value: InputType.Text, label: '텍스트(한 줄)' },
  { value: InputType.Multiline, label: '텍스트(여러 줄)' },
  { value: InputType.Number, label: '숫자' },
  { value: InputType.Color, label: '색상(단일)' },
  { value: InputType.ColorPalette, label: '색상(다중)' }
];

const InputTypeTable = InputTypeList.reduce((table, inputType) => {
  table[inputType.value] = inputType;
  return table;
}, {} as Record<InputType, typeof InputTypeList[number]>);

type Props = {
  groupIndex: number;
  index: number;
  isAlone: boolean;
  model: FieldModel;
};

export const Field = ({ groupIndex, index, isAlone, model }: Props) => {
  const [currentMode, dispatch] = useStore(store => store.Mode.current);

  const selectType = (option: { value: InputType }) => {
    dispatch(EntityAction.setFieldType({ groupIndex, index, type: option.value }));
  };

  const setDisplayName = (event: ChangeEvent<HTMLInputElement>) => {
    const displayName = event.target.value;
    dispatch(EntityAction.setFieldDisplayName({ groupIndex, index, displayName }));
  };

  const setValue = (value: any) => {
    dispatch(EntityAction.setFieldValue({ groupIndex, index, value }));
  };

  const addField = () => {
    dispatch(EntityAction.addField({ groupIndex, index }));
  };

  const removeField = () => {
    dispatch(EntityAction.removeField({ groupIndex, index }));
  };

  return (
    <Layout data-mode={currentMode.state}>
      {currentMode.isAdd && (
        <Autocomplete placeholder="속성 타입" defaultOption={InputTypeTable[model.type]} options={InputTypeList} onChange={selectType} />
      )}
      <TextInput placeholder="속성 이름" readOnly={!currentMode.isAdd} value={model.displayName} onChange={setDisplayName} />
      <FieldInput type={model.type} value={model.value} isReadonly={!currentMode.isAdd} onChange={setValue} />
      {currentMode.isAdd && <AddButton src={PlusBlackIcon} onClick={addField} />}
      {!isAlone && currentMode.isRemove && <DeleteButton src={CrossBlackIcon} onClick={removeField} />}
    </Layout>
  );
};
