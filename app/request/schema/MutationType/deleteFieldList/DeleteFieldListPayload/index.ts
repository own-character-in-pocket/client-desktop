import { GraphQLList, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { FieldType } from '../../../FieldType';

export const DeleteFieldLsitPayload = new GraphQLObjectType({
  name: 'DeleteFieldListPayload',
  fields: {
    fieldList: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(FieldType)))
    }
  }
});
