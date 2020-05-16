import { GraphQLID, GraphQLInputObjectType, GraphQLNonNull } from 'graphql';

export const DeleteTemplateInput = new GraphQLInputObjectType({
  name: 'DeleteTemplateInput',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  }
});
