import { createField } from '../../../utils';
import { RemoveEntityFromUniverseInput } from './RemoveEntityFromUniverseInput';
import { RemoveEntityFromUniversePayload } from './RemoveEntityFromUniversePayload';

export const removeEntityFromUniverse = createField({
  type: RemoveEntityFromUniversePayload,
  args: {
    input: {
      type: RemoveEntityFromUniverseInput
    }
  },
  async resolve() {
    //
  }
});
