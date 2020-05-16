import { GraphQLList, GraphQLNonNull } from 'graphql';
import { createField } from '../../../utils';
import { EntityType } from '../../EntityType';
import { EntitiesInput } from './EntitiesInput';

export const entities = createField<any, EntitiesInput>({
  type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(EntityType))),
  args: {
    input: {
      type: new GraphQLNonNull(EntitiesInput)
    }
  },
  async resolve() {
    //
  }
});
