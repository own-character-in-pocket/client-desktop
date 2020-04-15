import { Autocomplete } from '@app/atomics/Autocomplete';
import { Color, Radius, Swatch, Size } from '@app/constants/CSSVariables';
import { SimpleCard } from '@app/molecules/SimpleCard';
import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { useStore } from '../../Store';
import { EntityAction } from '../../Store/Entity';

const Layout = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: min-content 1fr;
`;

const Left = styled.div`
  width: 12rem;
`;

const Right = styled.div`
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 0.5rem;
  grid-template-columns: max-content 1fr;

  height: min-content;

  padding: 0.5rem;

  border-radius: ${Radius.Normal};

  transition-property: background-color;

  &:hover {
    background-color: ${Color.BackgroundHover};
  }
`;

const TextInput = styled.input`
  padding: 0 0.25rem;

  border-radius: ${Radius.Normal};
  box-shadow: inset 0 0 0 ${Size.BoxShadowThickness} ${Color.BoxShadowHover};
  background-color: ${Swatch.White};
`;

const ImageInput = styled.input`
  cursor: pointer;

  width: 100%;
`;

const CardTypeList = [{ value: 'Character', label: '캐릭터' }];

const CardTypeTable = CardTypeList.reduce((table, cardType) => {
  table[cardType.value] = cardType;
  return table;
}, {} as Record<string, typeof CardTypeList[number]>);

export const Thumbnail = () => {
  const [entity, dispatch] = useStore(store => store.Entity.current);

  const setCardType = (cardType: string) => {
    dispatch(EntityAction.setCardType(cardType));
  };

  const setDisplayName = (event: ChangeEvent<HTMLInputElement>) => {
    const displayName = event.target.value;
    dispatch(EntityAction.setDisplayName(displayName));
  };

  const setBackgroundColor = (event: ChangeEvent<HTMLInputElement>) => {
    const backgroundColor = event.target.value;
    dispatch(EntityAction.setBackgroundColor(backgroundColor));
  };

  return (
    <Layout>
      <Left>
        <SimpleCard model={entity} />
      </Left>
      <Right>
        <div>카드 타입</div>
        <Autocomplete
          placeholder="카드 타입"
          defaultOption={CardTypeTable[entity.cardType]}
          options={CardTypeList}
          onChange={setCardType}
        />
        <div>카드 이름</div>
        <TextInput placeholder="카드 이름" value={entity.displayName} onChange={setDisplayName} />
        <div>배경색</div>
        <TextInput type="color" value={entity.backgroundColor} onChange={setBackgroundColor} />
        <div>이미지</div>
        <ImageInput type="file" />
      </Right>
    </Layout>
  );
};
