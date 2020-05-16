import { GraphQLID, GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import { GraphQLJSONObject } from 'graphql-type-json';

export const UpdateFieldGroupInput = new GraphQLInputObjectType({
  name: 'UpdateFieldGroupInput',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    displayName: {
      type: GraphQLString
    },
    value: {
      type: GraphQLJSONObject
    },
    extra: {
      type: GraphQLJSONObject
    }
  }
});
