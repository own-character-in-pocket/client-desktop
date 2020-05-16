import { GraphQLInputObjectType, GraphQLInt, GraphQLNonNull } from 'graphql';

export type EntitiesInput = {
  input: {
    first: number;
    page: number;
  };
};

export const EntitiesInput = new GraphQLInputObjectType({
  name: 'EntitiesInput',
  fields: {
    first: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    page: {
      type: new GraphQLNonNull(GraphQLInt)
    }
  }
});
