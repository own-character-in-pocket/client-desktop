import { GraphQLNonNull } from 'graphql';
import { createField } from '../../../utils';
import { AddEntityToUniverseInput } from './AddEntityToUniverseInput';
import { AddEntityToUniversePayload } from './AddEntityToUniversePayload';

export const addEntityToUniverse = createField({
  type: new GraphQLNonNull(AddEntityToUniversePayload),
  args: {
    input: {
      type: new GraphQLNonNull(AddEntityToUniverseInput)
    }
  },
  async resolve() {
    //
  }
});
