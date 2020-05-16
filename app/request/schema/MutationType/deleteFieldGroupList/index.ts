import { GraphQLNonNull } from 'graphql';
import { createField } from '../../../utils';
import { DeleteFieldGroupListInput } from './DeleteFieldGroupListInput';
import { DeleteFieldGroupLsitPayload } from './DeleteFieldGroupListPayload';

export const deleteFieldGroupList = createField({
  type: new GraphQLNonNull(DeleteFieldGroupLsitPayload),
  args: {
    input: {
      type: new GraphQLNonNull(DeleteFieldGroupListInput)
    }
  },
  async resolve() {
    //
  }
});
