import { GraphQLObjectType } from 'graphql';
import { TemplateType } from '../../../TemplateType';

export const UpdateTemplatePayload = new GraphQLObjectType({
  name: 'UpdateTemplatePayload',
  fields: {
    template: {
      type: TemplateType
    }
  }
});
