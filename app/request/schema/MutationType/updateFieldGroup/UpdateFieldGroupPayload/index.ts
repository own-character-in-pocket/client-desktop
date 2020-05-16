import { GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { FieldGroupType } from '../../../FieldGroupType';

export const UpdateFieldGroupPayload = new GraphQLObjectType({
  name: 'UpdateFIeldGroupPayload',
  fields: {
    fieldGroup: {
      type: new GraphQLNonNull(FieldGroupType)
    }
  }
});
