import { compile } from 'path-to-regexp';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import CrossBlackIcon from '../../../assets/icons/cross-black.svg';
import CrossRedIcon from '../../../assets/icons/cross-red.svg';
import EggIcon from '../../../assets/icons/egg.svg';
import HomeIcon from '../../../assets/icons/home.svg';
import { CHARACTER_EDITOR, MAIN } from '../../../constants/Route';
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

const Anchor = styled(Link)`
  width: 3rem;
  height: 3rem;

  margin-top: 0.5rem;
  padding: 0.25rem;

  border-radius: 1rem;

  transition-property: opacity;

  &:hover {
    opacity: 0.84;

    img {
      transform: scale(1.1);
    }
  }
`;

const MainAnchor = styled(Anchor)`
  background-color: hsl(0, 0%, 64%);
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

const Image = styled.img`
  width: 100%;
  height: 100%;

  transition-property: transform;
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
  const [characterList, dispatch] = useAppStore(store =>
    store.Character.list.filter(character => store.Sidebar.characters.has(character.id))
  );

  const hasActiveCharacter = !!characterList.length;

  const closeProfileEditorById = (id: string) => {
    dispatch(SidebarAction.removeCharacter(id));

    const currentPath = history.location.pathname;
    const profilePath = compile(CHARACTER_EDITOR)({ id });
    if (currentPath === profilePath) {
      history.push(MAIN);
    }
  };

  return (
    <Layout>
      <MainAnchor to={MAIN}>
        <Image src={HomeIcon} />
      </MainAnchor>
      {hasActiveCharacter && (
        <>
          <Separator />
          {characterList.map(character => {
            const to = compile(CHARACTER_EDITOR)({ id: character.id });
            return (
              <ProfileAnchor key={character.id} to={to} style={{ backgroundColor: character.personalColor }}>
                <CloseButton src={CrossBlackIcon} onClick={event => (event.preventDefault(), closeProfileEditorById(character.id))} />
                <Image src={EggIcon} />
              </ProfileAnchor>
            );
          })}
        </>
      )}
    </Layout>
  );
};
