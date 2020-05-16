import { GraphQLID, GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import { GraphQLJSONObject } from 'graphql-type-json';
import { FieldTypeEnum } from '../../../FieldTypeEnum';

export const UpdateFieldInput = new GraphQLInputObjectType({
  name: 'UpdateFieldInput',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    displayName: {
      type: GraphQLString
    },
    type: {
      type: FieldTypeEnum
    },
    value: {
      type: GraphQLJSONObject
    },
    extra: {
      type: GraphQLJSONObject
    }
  }
});
