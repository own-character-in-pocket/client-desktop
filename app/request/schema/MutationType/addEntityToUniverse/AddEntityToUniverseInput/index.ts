import { GraphQLInputObjectType, GraphQLNonNull, GraphQLID } from 'graphql';

export const AddEntityToUniverseInput = new GraphQLInputObjectType({
  name: 'AddEntityToUniverseInput',
  fields: {
    entityId: {
      type: new GraphQLNonNull(GraphQLID)
    },
    universeId: {
      type: new GraphQLNonNull(GraphQLID)
    }
  }
});
