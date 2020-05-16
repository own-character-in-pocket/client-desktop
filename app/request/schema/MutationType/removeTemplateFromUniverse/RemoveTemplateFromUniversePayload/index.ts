import { GraphQLObjectType } from 'graphql';
import { TemplateType } from '../../../TemplateType';
import { UniverseType } from '../../../UniverseType';

export const RemoveTemplateFromUniversePayload = new GraphQLObjectType({
  name: 'RemoveTemplateFromUniversePayload',
  fields: {
    template: {
      type: TemplateType
    },
    universe: {
      type: UniverseType
    }
  }
});
