import { GraphQLList, GraphQLNonNull } from 'graphql';
import { createField } from '../../../utils';
import { TemplateType } from '../../TemplateType';
import { TemplatesInput } from './TemplatesInput';

export const templates = createField<any, TemplatesInput>({
  type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(TemplateType))),
  args: {
    input: {
      type: new GraphQLNonNull(TemplatesInput)
    }
  },
  async resolve() {
    //
  }
});
