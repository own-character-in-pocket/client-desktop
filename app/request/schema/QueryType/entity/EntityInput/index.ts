import { GraphQLID, GraphQLInputObjectType, GraphQLNonNull } from 'graphql';

export type EntityInput = {
  input: {
    id: string;
  };
};

export const EntityInput = new GraphQLInputObjectType({
  name: 'EntityInput',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  }
});
