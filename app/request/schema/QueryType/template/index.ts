import { GraphQLID, GraphQLNonNull } from 'graphql';
import { createField } from '../../../utils';
import { TemplateType } from '../../TemplateType';

type Args = {
  id: string;
};

export const template = createField<any, Args>({
  type: TemplateType,
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
