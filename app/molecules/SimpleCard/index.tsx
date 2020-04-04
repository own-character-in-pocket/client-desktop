import { Card } from '@app/atomics/Card';
import { Lineclamp } from '@app/atomics/Lineclamp';
import { EntityModel } from '@app/models';
import HumanIcon from 'assets/icons/human.svg';
import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  transition-property: transform;
  transition-duration: 1000ms;
`;

const Layout = styled(Card)`
  &:hover {
    ${Image} {
      transform: scale(1.1);
    }
  }
`;

const TextLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  padding: 0 0.5rem;
`;

const Text = styled(Lineclamp)``;

const CardType = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;

  width: 1.5rem;
  height: 1.5rem;
`;

type Props = {
  model: EntityModel;
  onClick?: () => void;
};

export const SimpleCard = ({ model, onClick }: Props) => (
  <Layout onClick={onClick}>
    <Card.Top>
      <Image src={model.thumbnail} style={{ backgroundColor: model.backgroundColor }} />
    </Card.Top>
    <Card.Bottom>
      <TextLayout>
        <Text>{model.displayName}</Text>
      </TextLayout>
      <CardType src={HumanIcon} />
    </Card.Bottom>
  </Layout>
);
