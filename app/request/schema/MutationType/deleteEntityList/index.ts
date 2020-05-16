import { GraphQLNonNull } from 'graphql';
import { createField } from '../../../utils';
import { DeleteEntityInput } from './DeleteEntityInput';
import { DeleteEntityPayload } from './DeleteEntityPayload';

export const deleteEntity = createField({
  type: new GraphQLNonNull(DeleteEntityPayload),
  args: {
    input: {
      type: new GraphQLNonNull(DeleteEntityInput)
    }
  },
  async resolve(_parent, _argument, _context, _info) {
    //
  }
});
