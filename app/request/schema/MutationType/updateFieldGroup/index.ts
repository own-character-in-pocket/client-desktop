import { GraphQLNonNull } from 'graphql';
import { createField } from '../../../utils';
import { UpdateFieldGroupInput } from './UpdateFieldGroupInput';
import { UpdateFieldGroupPayload } from './UpdateFieldGroupPayload';

export const updateFieldGroup = createField({
  type: new GraphQLNonNull(UpdateFieldGroupPayload),
  args: {
    input: {
      type: new GraphQLNonNull(UpdateFieldGroupInput)
    }
  },
  async resolve() {
    //
  }
});
