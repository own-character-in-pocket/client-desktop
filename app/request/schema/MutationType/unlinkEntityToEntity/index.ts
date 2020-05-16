import { createField } from '../../../utils';
import { UnlinkEntityToEntityInput } from './UnlinkEntityToEntityInput';
import { UnlinkEntityToEntityPayload } from './UnlinkEntityToEntityPayload';

export const unlinkEntityToEntity = createField({
  type: UnlinkEntityToEntityPayload,
  args: {
    input: {
      type: UnlinkEntityToEntityInput
    }
  },
  async resolve() {
    //
  }
});
