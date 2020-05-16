import { GraphQLID, GraphQLInputObjectType, GraphQLNonNull } from 'graphql';

export const DeleteEntityInput = new GraphQLInputObjectType({
  name: 'DeleteEntityInput',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  }
});
