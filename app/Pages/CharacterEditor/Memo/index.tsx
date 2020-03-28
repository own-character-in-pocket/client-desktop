import React from 'react';
import styled from 'styled-components';
import { Multiline } from '../../../atomics/Multiline';
import { useStore } from '../Store';
import { CharacterAction } from '../Store/Character';

const Layout = styled.div``;

const Heading = styled.div``;

export const Memo = () => {
  const [memo, dispatch] = useStore(store => store.Character.current.memo);

  const setMemo = (memo: string) => {
    dispatch(CharacterAction.setMemo(memo));
  };

  return (
    <Layout>
      <Heading>메모</Heading>
      <Multiline value={memo} placeholder="이런저런 메모" onChange={setMemo} />
    </Layout>
  );
};
