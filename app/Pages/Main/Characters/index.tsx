import { compile } from 'path-to-regexp';
import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Character } from '../../../atomics/Character';
import { CHARACTER_EDITOR } from '../../../constants/Route';
import { useAppStore } from '../../../store';
import { SidebarAction } from '../../../store/Sidebar';

const Layout = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, 10rem);

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
