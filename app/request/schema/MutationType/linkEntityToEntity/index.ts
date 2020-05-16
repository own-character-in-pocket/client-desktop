import { GraphQLNonNull } from 'graphql';
import { createField } from '../../../utils';
import { LinkEntityToEntityInput } from './LinkEntityToEntityInput';
import { LinkEntityToEntityPayload } from './LinkEntityToEntityPayload';

export const linkEntityToEntity = createField({
  type: LinkEntityToEntityPayload,
  args: {
    input: {
      type: new GraphQLNonNull(LinkEntityToEntityInput)
    }
  },
  async resolve() {
    //
  }
});
