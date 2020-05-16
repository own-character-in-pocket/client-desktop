import { GraphQLList, GraphQLNonNull } from 'graphql';
import { createField } from '../../../utils';
import { TemplateType } from '../../TemplateType';

type Args = {
  id: string;
};

export const templates = createField<any, Args>({
  type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(TemplateType))),
  async resolve(_parent, _argument, _context, _info) {
    return [];
    // const { id } = argument;
    // const universe = await context.loaders.query.load<any>({
    //   query: '',
    //   parameterList: []
    // });
    // return universe;
  }
});
