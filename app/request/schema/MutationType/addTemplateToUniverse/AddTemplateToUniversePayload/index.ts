import { GraphQLObjectType } from 'graphql';
import { TemplateType } from '../../../TemplateType';
import { UniverseType } from '../../../UniverseType';

export const AddTemplateToUniversePayload = new GraphQLObjectType({
  name: 'AddTemplateToUniversePayload',
  fields: {
    template: {
      type: TemplateType
    },
    universe: {
      type: UniverseType
    }
  }
});
