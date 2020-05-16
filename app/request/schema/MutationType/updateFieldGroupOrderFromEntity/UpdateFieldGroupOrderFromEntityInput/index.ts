import { GraphQLID, GraphQLInputObjectType, GraphQLList, GraphQLNonNull } from 'graphql';

export const UpdateFieldGroupOrderFromEntityInput = new GraphQLInputObjectType({
  name: 'UpdateFieldGroupOrderFromEntityInput',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    fieldGroupIdList: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(GraphQLID)))
    }
  }
});
