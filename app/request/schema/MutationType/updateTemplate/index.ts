import { GraphQLNonNull } from 'graphql';
import { createField } from '../../../utils';
import { UpdateTemplateInput } from './UpdateTemplateInput';
import { UpdateTemplatePayload } from './UpdateTemplatePayload';

export const updateTemplate = createField({
  type: new GraphQLNonNull(UpdateTemplatePayload),
  args: {
    input: {
      type: new GraphQLNonNull(UpdateTemplateInput)
    }
  },
  async resolve() {
    //
  }
});
