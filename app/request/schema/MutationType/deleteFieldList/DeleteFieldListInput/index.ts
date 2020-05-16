import { GraphQLID, GraphQLInputObjectType, GraphQLList, GraphQLNonNull } from 'graphql';

export const DeleteFieldListInput = new GraphQLInputObjectType({
  name: 'DeleteFieldListInput',
  fields: {
    idList: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(GraphQLID)))
    }
  }
});
