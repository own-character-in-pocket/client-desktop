import { GraphQLNonNull } from 'graphql';
import { createField } from '../../../utils';
import { CreateTemplateInput } from './CreateTemplateInput';
import { CreateTemplatePayload } from './CreateTemplatePayload';

export const createTemplate = createField({
  type: new GraphQLNonNull(CreateTemplatePayload),
  args: {
    input: {
      type: new GraphQLNonNull(CreateTemplateInput)
    }
  },
  async resolve(_parent, _argument, _context, _info) {
    //
  }
});
