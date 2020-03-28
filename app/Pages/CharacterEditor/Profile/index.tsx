import React from 'react';
import styled from 'styled-components';
import { InputText } from '../../../atomics/InputText';
import { useStore } from '../Store';
import { CharacterAction } from '../Store/Character';

const Layout = styled.div`
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 0.5rem;
  grid-template-columns: min-content 1fr;
`;

const Key = styled.div``;

export const Profile = () => {
  const [{ displayName }, dispatch] = useStore(store => store.Character.current);

  const setDisplayName = (displayName: string) => {
    dispatch(CharacterAction.setDisplayName(displayName));
  };

  return (
    <Layout>
      <Key>이름</Key>
      <InputText value={displayName} placeholder="다뉴엘" onChange={setDisplayName} />
      <Key>나이</Key>
      <InputText value={displayName} placeholder="17" onChange={setDisplayName} />
      <Key>종족</Key>
      <InputText value={displayName} placeholder="프로그래머" onChange={setDisplayName} />
      <Key>성별</Key>
      <InputText value={displayName} placeholder="Unknown" onChange={setDisplayName} />
    </Layout>
  );
};
