import { GraphQLNonNull } from 'graphql';
import { createField } from '../../../utils';
import { DeleteTemplateInput } from './DeleteTemplateInput';
import { DeleteTemplatePayload } from './DeleteTemplatePayload';

export const deleteTemplate = createField({
  type: new GraphQLNonNull(DeleteTemplatePayload),
  args: {
    input: {
      type: new GraphQLNonNull(DeleteTemplateInput)
    }
  },
  async resolve(_parent, _argument, _context, _info) {
    //
  }
});
