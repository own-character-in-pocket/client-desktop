import { CARD_EDITOR_VIEW } from '@app/constants/Views';
import { SimpleCard } from '@app/molecules/SimpleCard';
import { useAppStore } from '@app/store';
import { SidebarAction } from '@app/store/Sidebar';
import { compile } from 'path-to-regexp';
import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const Layout = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, 8rem);

  padding: 1rem;
`;

export const Cards = () => {
  const history = useHistory();
  const [entityList, dispatch] = useAppStore(store => store.Entity.list);

  const moveToCharacterEditor = (id: number) => {
    dispatch(SidebarAction.addCharacter(id));

    const path = compile(CARD_EDITOR_VIEW)({ id });
    history.push(path);
  };

  console.log(entityList);

  return (
    <Layout>
      {entityList.map((entity, index) => (
        <SimpleCard key={index} model={entity} onClick={() => moveToCharacterEditor(entity.id)} />
      ))}
    </Layout>
  );
};
