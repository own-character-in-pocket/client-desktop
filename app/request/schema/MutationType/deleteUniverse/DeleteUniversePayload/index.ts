import { GraphQLObjectType } from 'graphql';
import { UniverseType } from '../../../UniverseType';

export const DeleteUniversePayload = new GraphQLObjectType({
  name: 'DeleteUniversePayload',
  fields: {
    universe: {
      type: UniverseType
    }
  }
});
