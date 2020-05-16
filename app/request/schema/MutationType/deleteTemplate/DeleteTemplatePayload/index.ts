import { GraphQLObjectType } from 'graphql';
import { TemplateType } from '../../../TemplateType';

export const DeleteTemplatePayload = new GraphQLObjectType({
  name: 'DeleteTemplatePayload',
  fields: {
    template: {
      type: TemplateType
    }
  }
});
