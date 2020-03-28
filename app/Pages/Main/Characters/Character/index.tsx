import React from 'react';
import styled from 'styled-components';
import EggIcon from '../../../../assets/icons/egg.svg';
import { Lineclamp } from '../../../../atomics/Lineclamp';
import { CharacterModel } from '../../../../models/Character';

const Layout = styled.div`
  cursor: pointer;

  overflow: hidden;

  position: relative;

  height: 0;

  padding-bottom: calc(100% + 1.5rem);

  border-radius: 4px;

  transition-property: box-shadow;
  transition-timing-function: linear;

  &:hover {
    box-shadow: 0 0 16px 0 hsl(0, 0%, 84%);

    img {
      transform: scale(1.1);
    }
  }
`;

const Top = styled.div`
  overflow: hidden;

  position: relative;

  padding-bottom: 100%;

  border-radius: 4px;
`;

const Bottom = styled.div`
  position: relative;

  padding-bottom: 1.5rem;

  text-align: center;
`;

const Guard = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  height: 100%;
`;

const Image = styled.img`
  background-color: hsl(210, 100%, 84%);

  transition-property: transform;
  transition-duration: 1000ms;
`;

const TextLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  padding: 0 0.5rem;
`;

const Text = styled(Lineclamp)``;

type Props = {
  model: CharacterModel;
  onClick: () => void;
};

export const Character = ({ model, onClick }: Props) => (
  <Layout onClick={onClick}>
    <Top>
      <Guard>
        <Image src={EggIcon} />
      </Guard>
    </Top>
    <Bottom>
      <Guard>
        <TextLayout>
          <Text>{model.displayName}</Text>
        </TextLayout>
      </Guard>
    </Bottom>
  </Layout>
);