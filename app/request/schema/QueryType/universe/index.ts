import { GraphQLNonNull } from 'graphql';
import { createField } from '../../../utils';
import { UniverseType } from '../../UniverseType';
import { UniverseInput } from './UniverseInput';

export const universe = createField<any, UniverseInput>({
  type: UniverseType,
  args: {
    input: {
      type: new GraphQLNonNull(UniverseInput)
    }
  },
  async resolve() {
    //
  }
});
