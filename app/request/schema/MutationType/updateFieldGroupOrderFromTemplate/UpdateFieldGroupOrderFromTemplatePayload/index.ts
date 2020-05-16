import { GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { TemplateType } from '../../../TemplateType';
import { FieldGroupType } from '../../../FieldGroupType';

export const UpdateFieldGroupOrderFromTemplatePayload = new GraphQLObjectType({
  name: 'UpdateFieldGroupOrderFromTemplatePayload',
  fields: {
    template: {
      type: new GraphQLNonNull(TemplateType)
    },
    fieldGroup: {
      type: new GraphQLNonNull(FieldGroupType)
    }
  }
});
