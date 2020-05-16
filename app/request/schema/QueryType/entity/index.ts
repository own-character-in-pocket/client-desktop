import { GraphQLNonNull } from 'graphql';
import { createField } from '../../../utils';
import { EntityType } from '../../EntityType';
import { EntityInput } from './EntityInput';

export const entity = createField<any, EntityInput>({
  type: EntityType,
  args: {
    input: {
      type: new GraphQLNonNull(EntityInput)
    }
  },
  async resolve(_parent, args, context) {
    const { id } = args.input;
    return context.loaders.entity.load(id);
  }
});
