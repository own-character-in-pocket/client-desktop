import { GraphQLNonNull } from 'graphql';
import { createField } from '../../../utils';
import { UpdateEntityInput } from './UpdateEntityInput';
import { UpdateEntityPayload } from './UpdateEntityPayload';

export const updateEntity = createField({
  type: new GraphQLNonNull(UpdateEntityPayload),
  args: {
    input: {
      type: new GraphQLNonNull(UpdateEntityInput)
    }
  },
  async resolve() {
    //
  }
});
