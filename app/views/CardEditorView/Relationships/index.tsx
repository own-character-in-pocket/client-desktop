import { PlusCard } from '@app/molecules/PlusCard';
import { EntityModel } from '@app/models';
import { SimpleCard } from '@app/molecules/SimpleCard';
import React from 'react';
import styled from 'styled-components';
import { useSelector } from '../Store';

const Layout = styled.div``;

const Heading = styled.div`
  font-size: 1.25rem;
  font-weight: bolder;
`;

const RelationshipList = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, 8rem);

  margin-top: 0.5rem;
`;

export const Relationships = () => {
  const entityList = useSelector(store => store.Entity.current.relationshipList);

  const updateRelationship = (entity: EntityModel) => {
    console.log(entity);
  };

  const addEntity = () => {
    //
  };

  return (
    <Layout>
      <Heading>연관관계</Heading>
      <RelationshipList>
        {entityList.map((entity, index) => (
          <SimpleCard key={index} model={entity} onClick={() => updateRelationship(entity)} />
        ))}
        <PlusCard onClick={addEntity} />
      </RelationshipList>
    </Layout>
  );
};
