import { GraphQLID, GraphQLInputObjectType, GraphQLList, GraphQLNonNull } from 'graphql';

export const DeleteFieldGroupListInput = new GraphQLInputObjectType({
  name: 'DeleteFieldGroupListInput',
  fields: {
    idList: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(GraphQLID)))
    }
  }
});
