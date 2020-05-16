import { GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { EntityType } from '../../../EntityType';
import { UniverseType } from '../../../UniverseType';

export const AddEntityToUniversePayload = new GraphQLObjectType({
  name: 'AddEntityToUniversePayload',
  fields: {
    entity: {
      type: new GraphQLNonNull(EntityType)
    },
    universe: {
      type: new GraphQLNonNull(UniverseType)
    }
  }
});
