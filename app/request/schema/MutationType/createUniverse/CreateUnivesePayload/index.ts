import { GraphQLObjectType } from 'graphql';
import { UniverseType } from '../../../UniverseType';

export const CreateUniversePayload = new GraphQLObjectType({
  name: 'CreateUniversePayload',
  fields: {
    universe: {
      type: UniverseType
    }
  }
});
