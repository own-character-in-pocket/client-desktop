import { GraphQLID, GraphQLNonNull } from 'graphql';
import { createField } from '../../../utils';
import { UniverseType } from '../../UniverseType';

type Args = {
  id: string;
};

export const entity = createField<any, Args>({
  type: UniverseType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  async resolve(_parent, _argument, _context, _info) {
    return null;
    // const { id } = argument;
    // const universe = await context.loaders.query.load<any>({
    //   query: '',
    //   parameterList: []
    // });
    // return universe;
  }
});
