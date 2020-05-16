import { GraphQLNonNull } from 'graphql';
import { createField } from '../../../utils';
import { UpdateUniverseInput } from './UpdateTemplateInput';
import { UpdateUniversePayload } from './UpdateTemplatePayload';

export const updateUniverse = createField({
  type: new GraphQLNonNull(UpdateUniversePayload),
  args: {
    input: {
      type: new GraphQLNonNull(UpdateUniverseInput)
    }
  },
  async resolve() {
    //
  }
});
