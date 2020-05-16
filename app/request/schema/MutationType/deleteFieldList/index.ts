import { GraphQLNonNull } from 'graphql';
import { createField } from '../../../utils';
import { DeleteFieldListInput } from './DeleteFieldListInput';
import { DeleteFieldLsitPayload } from './DeleteFieldListPayload';

export const deleteFieldList = createField({
  type: new GraphQLNonNull(DeleteFieldLsitPayload),
  args: {
    input: {
      type: new GraphQLNonNull(DeleteFieldListInput)
    }
  },
  async resolve() {
    //
  }
});
