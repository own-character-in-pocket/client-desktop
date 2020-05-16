import { GraphQLNonNull } from 'graphql';
import { createField } from '../../../utils';
import { DeleteUniverseInput } from './DeleteUniverseInput';
import { DeleteUniversePayload } from './DeleteUniversePayload';

export const deleteUniverse = createField({
  type: new GraphQLNonNull(DeleteUniversePayload),
  args: {
    input: {
      type: new GraphQLNonNull(DeleteUniverseInput)
    }
  },
  async resolve(_parent, _argument, _context, _info) {
    //
  }
});
