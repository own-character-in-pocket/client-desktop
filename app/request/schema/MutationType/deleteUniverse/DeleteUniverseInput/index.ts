import { GraphQLID, GraphQLInputObjectType, GraphQLNonNull } from 'graphql';

export const DeleteUniverseInput = new GraphQLInputObjectType({
  name: 'DeleteUniverseInput',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  }
});
