import { compile } from 'path-to-regexp';
import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { CHARACTER_EDITOR } from '../../../constants/Route';
import { useAppStore } from '../../../store';
import { SidebarAction } from '../../../store/Sidebar';
import { Character } from './Character';

const Layout = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));

  padding: 1rem;
`;

export const Characters = () => {
  const history = useHistory();
  const [characterList, dispatch] = useAppStore(store => store.Character.list);

  const moveToCharacterEditor = (id: string) => {
    dispatch(SidebarAction.addCharacter(id));

    const path = compile(CHARACTER_EDITOR)({ id });
    history.push(path);
  };

  return (
    <Layout>
      {characterList.map((character, index) => (
        <Character key={index} model={character} onClick={() => moveToCharacterEditor(character.id)} />
      ))}
    </Layout>
  );
};
