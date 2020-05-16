import { GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { TemplateType } from '../../../TemplateType';

export const AddFieldGroupListToTemplatePayload = new GraphQLObjectType({
  name: 'AddFieldGroupListToTemplatePayload',
  fields: {
    template: {
      type: new GraphQLNonNull(TemplateType)
    }
  }
});
