import CrossBlackIcon from '@app/assets/icons/cross-black.svg';
import CrossRedIcon from '@app/assets/icons/cross-red.svg';
import PlusBlackIcon from '@app/assets/icons/plus-black.svg';
import PlusBlueIcon from '@app/assets/icons/plus-blue.svg';
import { Autocomplete } from '@app/atomics/Autocomplete';
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
  grid-template-columns: 12ch 12ch 1fr 1rem;
  align-items: center;
`;

const TextInput = styled.input`
  padding: 0 0.25rem;

  border-radius: 0.25rem;
  box-shadow: inset 0 0 0 1px hsl(0, 0%, 84%);
  background-color: white;
`;

const AddButton = styled.img`
  cursor: pointer;

  width: 1rem;
  height: 1rem;

  &:hover {
    content: url(${PlusBlueIcon});
  }
`;

const DeleteButton = styled.img`
  cursor: pointer;

  width: 1rem;
  height: 1rem;

  &:hover {
    content: url(${CrossRedIcon});
  }
`;

const InputTypeList = [{ value: InputType.Text, label: '텍스트' }];

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
  const [isRemoveable, dispatch] = useStore(store => store.Mode.isRemoveable);

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
    <Layout>
      <Autocomplete placeholder="속성 타입" defaultOption={InputTypeTable[model.type]} options={InputTypeList} onChange={selectType} />
      <TextInput placeholder="속성 이름" value={model.displayName} onChange={setDisplayName} />
      <FieldInput type={model.type} value={model.value} onChange={setValue} />
      {!isRemoveable && <AddButton src={PlusBlackIcon} onClick={addField} />}
      {!isAlone && isRemoveable && <DeleteButton src={CrossBlackIcon} onClick={removeField} />}
    </Layout>
  );
};
