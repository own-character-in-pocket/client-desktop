import { GraphQLInputObjectType, GraphQLInt, GraphQLNonNull } from 'graphql';

export type UniversesInput = {
  input: {
    first: number;
    page: number;
  };
};

export const UniversesInput = new GraphQLInputObjectType({
  name: 'UniversesInput',
  fields: {
    first: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    page: {
      type: new GraphQLNonNull(GraphQLInt)
    }
  }
});
