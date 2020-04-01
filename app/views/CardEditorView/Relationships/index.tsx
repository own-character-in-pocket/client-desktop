import { CardModel } from '@app/models/Card';
import { SimpleCard } from '@app/molecules/SimpleCard';
import React from 'react';
import styled from 'styled-components';
import { useSelector } from '../Store';

const Layout = styled.div``;

const Heading = styled.div``;

const RelationshipList = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, 8rem);
`;

export const Relationships = () => {
  const cardList = useSelector(store => store.Card.current.relationshipList);

  const updateRelationship = (card: CardModel) => {
    console.log(card);
  };

  return (
    <Layout>
      <Heading>연관관계</Heading>
      <RelationshipList>
        {cardList.map((card, index) => (
          <SimpleCard key={index} model={card} onClick={() => updateRelationship(card)} />
        ))}
      </RelationshipList>
    </Layout>
  );
};
