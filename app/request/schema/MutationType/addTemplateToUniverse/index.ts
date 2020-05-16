import { GraphQLNonNull } from 'graphql';
import { createField } from '../../../utils';
import { AddTemplateToUniverseInput } from './AddTemplateToUniverseInput';
import { AddTemplateToUniversePayload } from './AddTemplateToUniversePayload';

export const addTemplateToUniverse = createField({
  type: AddTemplateToUniversePayload,
  args: {
    input: {
      type: new GraphQLNonNull(AddTemplateToUniverseInput)
    }
  },
  async resolve() {
    //
  }
});
