import { compile } from 'path-to-regexp';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import CrossBlackIcon from '../../../assets/icons/cross-black.svg';
import CrossRedIcon from '../../../assets/icons/cross-red.svg';
import EggIcon from '../../../assets/icons/egg.svg';
import HumanIcon from '../../../assets/icons/human.svg';
import HomeIcon from '../../../assets/icons/home.svg';
import BentoIcon from '../../../assets/icons/bento.svg';
import { CARD_EDITOR_VIEW, MAIN_VIEW, CARD_GRID_VIEW } from '../../../constants/Views';
import { useAppStore } from '../../../store';
import { SidebarAction } from '../../../store/Sidebar';

const Layout = styled.div`
  overflow-x: auto;
  overflow-y: hidden;

  position: fixed;
  left: 0;
  top: 0;

  display: flex;
  flex-direction: column;

  width: 4rem;
  height: 100%;

  padding: 0.5rem;
  padding-top: 0;

  background-color: hsl(0, 0%, 92%);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;

  transition-property: transform;
`;

const Anchor = styled(Link)`
  width: 3rem;
  height: 3rem;

  margin-top: 0.5rem;
  padding: 0.25rem;

  border-radius: 1rem;

  transition-property: opacity;

  &:hover {
    opacity: 0.84;

    ${Image} {
      transform: scale(1.1);
    }
  }
`;

const MainAnchor = styled(Anchor)`
  background-color: hsl(30, 64%, 64%);
`;

const CardGridAnchor = styled(Anchor)`
  background-color: hsl(210, 64%, 64%);
`;

const CloseButton = styled.img`
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;

  display: none;

  width: 1.25rem;
  height: 1.25rem;

  padding: 0.25rem;

  &:hover {
    content: url(${CrossRedIcon});
  }
`;

const ProfileAnchor = styled(Anchor)`
  position: relative;

  &:hover {
    ${CloseButton} {
      display: initial;
    }
  }
`;

const CardType = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 1.5rem;
  height: 1.5rem;
`;

const Separator = styled.hr`
  height: 0;

  margin: 0;
  margin-top: 0.5rem;

  border: 0;
  border-bottom: 1px solid hsl(0, 0%, 84%);
`;

export const Sidebar = () => {
  const history = useHistory();
  const [cardList, dispatch] = useAppStore(store => store.Card.list.filter(card => store.Sidebar.cards.has(card.id)));

  const hasActiveCharacter = !!cardList.length;

  const closeProfileEditorById = (id: string) => {
    dispatch(SidebarAction.removeCharacter(id));

    const currentPath = history.location.pathname;
    const profilePath = compile(CARD_EDITOR_VIEW)({ id });
    if (currentPath === profilePath) {
      history.push(MAIN_VIEW);
    }
  };

  return (
    <Layout>
      <MainAnchor to={MAIN_VIEW}>
        <Image src={HomeIcon} />
      </MainAnchor>
      <CardGridAnchor to={CARD_GRID_VIEW}>
        <Image src={BentoIcon} />
      </CardGridAnchor>
      {hasActiveCharacter && (
        <>
          <Separator />
          {cardList.map(card => {
            const to = compile(CARD_EDITOR_VIEW)({ id: card.id });
            return (
              <ProfileAnchor key={card.id} to={to} style={{ backgroundColor: card.backgroundColor }}>
                <CloseButton src={CrossBlackIcon} onClick={event => (event.preventDefault(), closeProfileEditorById(card.id))} />
                <Image src={EggIcon} />
                <CardType src={HumanIcon} />
              </ProfileAnchor>
            );
          })}
        </>
      )}
    </Layout>
  );
};
