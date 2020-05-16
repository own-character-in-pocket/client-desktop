import { GraphQLID, GraphQLInputObjectType, GraphQLNonNull } from 'graphql';

export const UnlinkEntityToEntityInput = new GraphQLInputObjectType({
  name: 'UnlinkEntityToEntityInput',
  fields: {
    from: {
      type: new GraphQLNonNull(GraphQLID)
    },
    to: {
      type: new GraphQLNonNull(GraphQLID)
    }
  }
});
