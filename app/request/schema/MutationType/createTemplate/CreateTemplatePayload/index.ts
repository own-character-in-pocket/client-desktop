import { GraphQLObjectType } from 'graphql';
import { TemplateType } from '../../../TemplateType';

export const CreateTemplatePayload = new GraphQLObjectType({
  name: 'CreateTemplatePayload',
  fields: {
    template: {
      type: TemplateType
    }
  }
});
