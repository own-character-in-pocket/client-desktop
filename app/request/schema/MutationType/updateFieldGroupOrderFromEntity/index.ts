import { GraphQLNonNull } from 'graphql';
import { createField } from '../../../utils';
import { UpdateFieldGroupOrderFromEntityInput } from './UpdateFieldGroupOrderFromEntityInput';
import { UpdateFieldGroupOrderFromEntityPayload } from './UpdateFieldGroupOrderFromEntityPayload';

export const updateFieldGroupOrderFromEntity = createField({
  type: new GraphQLNonNull(UpdateFieldGroupOrderFromEntityPayload),
  args: {
    input: {
      type: new GraphQLNonNull(UpdateFieldGroupOrderFromEntityInput)
    }
  },
  async resolve() {
    //
  }
});
