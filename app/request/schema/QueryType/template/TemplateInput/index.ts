import { GraphQLInputObjectType, GraphQLNonNull, GraphQLID } from 'graphql';

export type TemplateInput = {
  input: {
    id: string;
  };
};

export const TemplateInput = new GraphQLInputObjectType({
  name: 'TemplateInput',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  }
});
