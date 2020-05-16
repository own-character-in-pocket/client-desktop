import { GraphQLID, GraphQLInputObjectType, GraphQLNonNull } from 'graphql';

export type UniverseInput = {
  input: {
    id: string;
  };
};

export const UniverseInput = new GraphQLInputObjectType({
  name: 'UniverseInput',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  }
});
