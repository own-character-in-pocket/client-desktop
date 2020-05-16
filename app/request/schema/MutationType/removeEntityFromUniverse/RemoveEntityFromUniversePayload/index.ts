import { EntityType } from '../../../EntityType';
import { UniverseType } from '../../../UniverseType';
import { GraphQLObjectType } from 'graphql';

export const RemoveEntityFromUniversePayload = new GraphQLObjectType({
  name: 'RemoveEntityFromUniversePayload',
  fields: {
    entity: {
      type: EntityType
    },
    universe: {
      type: UniverseType
    }
  }
});
