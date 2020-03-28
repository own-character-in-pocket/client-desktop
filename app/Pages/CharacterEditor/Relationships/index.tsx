import React from 'react';
import styled from 'styled-components';
import { Character } from '../../../atomics/Character';
import { useSelector } from '../Store';
import { CharacterModel } from '../../../models/Character';

const Layout = styled.div``;

const Heading = styled.div``;

const RelationshipList = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, 10rem);
`;

export const Relationships = () => {
  const characterList = useSelector(store => store.Character.current.relationshipList);

  const updateRelationship = (character: CharacterModel) => {
    console.log(character);
  };

  return (
    <Layout>
      <Heading>연관관계</Heading>
      <RelationshipList>
        {characterList.map((character, index) => (
          <Character key={index} model={character} onClick={() => updateRelationship(character)} />
        ))}
      </RelationshipList>
    </Layout>
  );
};
