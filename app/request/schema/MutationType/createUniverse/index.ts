import { GraphQLNonNull } from 'graphql';
import { createField } from '../../../utils';
import { CreateUniverseInput } from './CreateUniverseInput';
import { CreateUniversePayload } from './CreateUnivesePayload';

export const createUniverse = createField({
  type: new GraphQLNonNull(CreateUniversePayload),
  args: {
    input: {
      type: new GraphQLNonNull(CreateUniverseInput)
    }
  },
  async resolve() {
    //
  }
});
