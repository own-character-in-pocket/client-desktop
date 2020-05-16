import { GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { FieldGroupType } from '../../../FieldGroupType';

export const AddFieldListToFieldGroupPayload = new GraphQLObjectType({
  name: 'AddFieldListToFieldGroupPayload',
  fields: {
    fieldGroup: {
      type: new GraphQLNonNull(FieldGroupType)
    }
  }
});
