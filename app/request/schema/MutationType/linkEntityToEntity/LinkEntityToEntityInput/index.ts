import { GraphQLID, GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

export const LinkEntityToEntityInput = new GraphQLInputObjectType({
  name: 'LinkEntityToEntityInput',
  fields: {
    from: {
      type: new GraphQLNonNull(GraphQLID)
    },
    to: {
      type: new GraphQLNonNull(GraphQLID)
    },
    relation: {
      type: new GraphQLNonNull(GraphQLString)
    }
  }
});
