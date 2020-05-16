import { GraphQLInputObjectType, GraphQLInt, GraphQLNonNull } from 'graphql';

export type TemplatesInput = {
  input: {
    first: number;
    page: number;
  };
};

export const TemplatesInput = new GraphQLInputObjectType({
  name: 'TemplatesInput',
  fields: {
    first: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    page: {
      type: new GraphQLNonNull(GraphQLInt)
    }
  }
});
