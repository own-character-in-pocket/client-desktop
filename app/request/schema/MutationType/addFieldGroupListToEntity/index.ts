import { GraphQLNonNull } from 'graphql';
import { createField } from '../../../utils';
import { AddFieldGroupListToEntityInput } from './AddFieldGroupListToEntityInput';
import { AddFieldGroupListToEntityPayload } from './AddFieldGroupListToEntityPayload';

export const addFieldGroupListToEntity = createField({
  type: new GraphQLNonNull(AddFieldGroupListToEntityPayload),
  args: {
    input: {
      type: new GraphQLNonNull(AddFieldGroupListToEntityInput)
    }
  },
  async resolve() {
    //
  }
});
