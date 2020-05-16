import { GraphQLObjectType } from 'graphql';
import { UniverseType } from '../../../UniverseType';

export const UpdateUniversePayload = new GraphQLObjectType({
  name: 'UpdateUniversePayload',
  fields: {
    universe: {
      type: UniverseType
    }
  }
});
