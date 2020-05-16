import { GraphQLNonNull } from 'graphql';
import { createField } from '../../../utils';
import { CreateEntityInput } from './CreateEntityInput';
import { CreateEntityPayload } from './CreateEntityPayload';

export const createEntity = createField({
  type: new GraphQLNonNull(CreateEntityPayload),
  args: {
    input: {
      type: new GraphQLNonNull(CreateEntityInput)
    }
  },
  async resolve(_parent, _argument, _context, _info) {
    //
  }
});
