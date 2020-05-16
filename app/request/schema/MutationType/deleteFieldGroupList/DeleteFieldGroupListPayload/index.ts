import { GraphQLList, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { FieldGroupType } from '../../../FieldGroupType';

export const DeleteFieldGroupLsitPayload = new GraphQLObjectType({
  name: 'DeleteFieldGroupListPayload',
  fields: {
    fieldGroupList: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(FieldGroupType)))
    }
  }
});
