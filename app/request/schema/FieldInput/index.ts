import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import { FieldTypeEnum } from '../FieldTypeEnum';
import { GraphQLJSONObject } from 'graphql-type-json';

export const FieldInput = new GraphQLInputObjectType({
  name: 'FieldInput',
  fields: {
    displayName: {
      type: new GraphQLNonNull(GraphQLString)
    },
    type: {
      type: new GraphQLNonNull(FieldTypeEnum)
    },
    value: {
      type: new GraphQLNonNull(GraphQLJSONObject)
    },
    extra: {
      type: GraphQLJSONObject
    }
  }
});
