import { GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { FieldType } from '../../../FieldType';

export const UpdateFieldPayload = new GraphQLObjectType({
  name: 'UpdateFIeldPayload',
  fields: {
    field: {
      type: new GraphQLNonNull(FieldType)
    }
  }
});
