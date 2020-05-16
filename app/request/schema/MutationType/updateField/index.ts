import { GraphQLNonNull } from 'graphql';
import { createField } from '../../../utils';
import { UpdateFieldInput } from './UpdateFieldInput';
import { UpdateFieldPayload } from './UpdateFieldPayload';

export const updateField = createField({
  type: new GraphQLNonNull(UpdateFieldPayload),
  args: {
    input: {
      type: new GraphQLNonNull(UpdateFieldInput)
    }
  },
  async resolve() {
    //
  }
});
