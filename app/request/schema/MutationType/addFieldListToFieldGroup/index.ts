import { GraphQLNonNull } from 'graphql';
import { createField } from '../../../utils';
import { AddFieldListToFieldGroupInput } from './AddFieldListToFieldGroupInput';
import { AddFieldListToFieldGroupPayload } from './AddFieldListToFieldGroupPayload';

export const addFieldListToFieldGroup = createField({
  type: new GraphQLNonNull(AddFieldListToFieldGroupPayload),
  args: {
    input: {
      type: new GraphQLNonNull(AddFieldListToFieldGroupInput)
    }
  },
  async resolve() {
    //
  }
});
