import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MAIN, CHARACTER_EDITOR } from '../../../constants/Route';
import HomeIcon from '../../../assets/icons/home.svg';
import EggIcon from '../../../assets/icons/egg.svg';

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

const ProfileAnchor = styled(Anchor)`
  background-color: hsl(210, 100%, 84%);
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

export const Sidebar = () => (
  <Layout>
    <MainAnchor to={MAIN}>
      <Image src={HomeIcon} />
    </MainAnchor>
    <Separator />
    <ProfileAnchor to={CHARACTER_EDITOR}>
      <Image src={EggIcon} />
    </ProfileAnchor>
    <ProfileAnchor to={CHARACTER_EDITOR}>
      <Image src={EggIcon} />
    </ProfileAnchor>
    <ProfileAnchor to={CHARACTER_EDITOR}>
      <Image src={EggIcon} />
    </ProfileAnchor>
  </Layout>
);
