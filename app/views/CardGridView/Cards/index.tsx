import { compile } from 'path-to-regexp';
import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Card } from '../../../atomics/Card';
import { CARD_EDITOR_VIEW } from '../../../constants/Views';
import { useAppStore } from '../../../store';
import { SidebarAction } from '../../../store/Sidebar';

const Layout = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, 8rem);

  padding: 1rem;
`;

export const Cards = () => {
  const history = useHistory();
  const [cardList, dispatch] = useAppStore(store => store.Card.list);

  const moveToCharacterEditor = (id: string) => {
    dispatch(SidebarAction.addCharacter(id));

    const path = compile(CARD_EDITOR_VIEW)({ id });
    history.push(path);
  };

  return (
    <Layout>
      {cardList.map((card, index) => (
        <Card key={index} model={card} onClick={() => moveToCharacterEditor(card.id)} />
      ))}
    </Layout>
  );
};
