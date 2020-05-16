import { GraphQLID, GraphQLInputObjectType, GraphQLNonNull } from 'graphql';

export const RemoveTemplateFromUniverseInput = new GraphQLInputObjectType({
  name: 'RemoveTemplateFromUniverseInput',
  fields: {
    templateId: {
      type: new GraphQLNonNull(GraphQLID)
    },
    universeId: {
      type: new GraphQLNonNull(GraphQLID)
    }
  }
});
