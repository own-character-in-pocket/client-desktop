import { GraphQLID, GraphQLInputObjectType, GraphQLNonNull } from 'graphql';

export const RemoveEntityFromUniverseInput = new GraphQLInputObjectType({
  name: 'RemoveEntityFromUniverseInput',
  fields: {
    entityId: {
      type: new GraphQLNonNull(GraphQLID)
    },
    universeId: {
      type: new GraphQLNonNull(GraphQLID)
    }
  }
});
