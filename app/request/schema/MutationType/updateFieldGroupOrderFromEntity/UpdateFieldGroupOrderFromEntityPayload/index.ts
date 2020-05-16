import { GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { EntityType } from '../../../EntityType';
import { FieldGroupType } from '../../../FieldGroupType';

export const UpdateFieldGroupOrderFromEntityPayload = new GraphQLObjectType({
  name: 'UpdateFieldGroupOrderFromEntityPayload',
  fields: {
    entity: {
      type: new GraphQLNonNull(EntityType)
    },
    fieldGroup: {
      type: new GraphQLNonNull(FieldGroupType)
    }
  }
});
