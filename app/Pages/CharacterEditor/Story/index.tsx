import React from 'react';
import styled from 'styled-components';
import { Multiline } from '../../../atomics/Multiline';
import { useStore } from '../Store';
import { CharacterAction } from '../Store/Character';

const Layout = styled.div``;

const Heading = styled.div``;

export const Story = () => {
  const [story, dispatch] = useStore(store => store.Character.current.story);

  const setStory = (story: string) => {
    dispatch(CharacterAction.setStory(story));
  };

  return (
    <Layout>
      <Heading>스토리</Heading>
      <Multiline value={story} placeholder="캐릭터만을 위한 특별한 스토리!" onChange={setStory} />
    </Layout>
  );
};
