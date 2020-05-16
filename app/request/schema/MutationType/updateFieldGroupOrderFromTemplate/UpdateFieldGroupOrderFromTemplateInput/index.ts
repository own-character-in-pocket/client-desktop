import { GraphQLID, GraphQLInputObjectType, GraphQLList, GraphQLNonNull } from 'graphql';

export const UpdateFieldGroupOrderFromTemplateInput = new GraphQLInputObjectType({
  name: 'UpdateFieldGroupOrderFromTemplateInput',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    fieldGroupIdList: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(GraphQLID)))
    }
  }
});
