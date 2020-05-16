import { GraphQLInputObjectType, GraphQLNonNull, GraphQLID } from 'graphql';

export const AddTemplateToUniverseInput = new GraphQLInputObjectType({
  name: 'AddTemplateToUniverseInput',
  fields: {
    templateId: {
      type: new GraphQLNonNull(GraphQLID)
    },
    universeId: {
      type: new GraphQLNonNull(GraphQLID)
    }
  }
});
