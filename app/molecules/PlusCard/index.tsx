import Plus from '@app/assets/icons/plus-black-1px.svg';
import { Card } from '@app/atomics/Card';
import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

type Props = {
  onClick: () => void;
};

export const PlusCard = ({ onClick }: Props) => (
  <Card onClick={onClick}>
    <Card.Top>
      <Image src={Plus} />
    </Card.Top>
    <Card.Bottom>추가하기</Card.Bottom>
  </Card>
);
