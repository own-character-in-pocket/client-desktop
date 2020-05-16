import { createField } from '../../../utils';
import { RemoveTemplateFromUniverseInput } from './RemoveTemplateFromUniverseInput';
import { RemoveTemplateFromUniversePayload } from './RemoveTemplateFromUniversePayload';

export const removeTemplateFromUniverse = createField({
  type: RemoveTemplateFromUniversePayload,
  args: {
    input: {
      type: RemoveTemplateFromUniverseInput
    }
  },
  async resolve() {
    //
  }
});
