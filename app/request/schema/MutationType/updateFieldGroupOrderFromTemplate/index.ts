import { GraphQLNonNull } from 'graphql';
import { createField } from '../../../utils';
import { UpdateFieldGroupOrderFromTemplateInput } from './UpdateFieldGroupOrderFromTemplateInput';
import { UpdateFieldGroupOrderFromTemplatePayload } from './UpdateFieldGroupOrderFromTemplatePayload';

export const updateFieldGroupOrderFromTemplate = createField({
  type: new GraphQLNonNull(UpdateFieldGroupOrderFromTemplatePayload),
  args: {
    input: {
      type: new GraphQLNonNull(UpdateFieldGroupOrderFromTemplateInput)
    }
  },
  async resolve() {
    //
  }
});
