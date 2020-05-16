import { GraphQLNonNull } from 'graphql';
import { createField } from '../../../utils';
import { TemplateType } from '../../TemplateType';
import { TemplateInput } from './TemplateInput';

export const template = createField<any, TemplateInput>({
  type: TemplateType,
  args: {
    input: {
      type: new GraphQLNonNull(TemplateInput)
    }
  },
  async resolve() {
    //
  }
});
