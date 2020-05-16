import { GraphQLList, GraphQLNonNull } from 'graphql';
import { createField } from '../../../utils';
import { UniverseType } from '../../UniverseType';
import { UniversesInput } from './UniversesInput';

export const universes = createField<any, UniversesInput>({
  type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(UniverseType))),
  args: {
    input: {
      type: new GraphQLNonNull(UniversesInput)
    }
  },
  async resolve() {
    //
  }
});
