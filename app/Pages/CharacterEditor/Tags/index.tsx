import React from 'react';
import styled from 'styled-components';
import ReactSelect from 'react-select/creatable';
import { useStore } from '../Store';
import { CharacterAction } from '../Store/Character';

const Layout = styled.div``;

const Heading = styled.div``;

const Autocomplete = styled(ReactSelect)``;

const createOption = (tag: string) => ({ value: tag, label: tag });

export const Tags = () => {
  const [tagList, dispatch] = useStore(store => store.Character.current.tagList);
  const recommendTagList = [] as string[];

  const setTagList = (optionList: Array<{ value: string }>) => {
    const nextTagList = optionList.map(({ value }) => value);
    dispatch(CharacterAction.setTagList(nextTagList));
  };

  return (
    <Layout>
      <Heading>태그</Heading>
      <Autocomplete isMulti value={tagList.map(createOption)} options={recommendTagList.map(createOption)} onChange={setTagList} />
    </Layout>
  );
};
