import { GraphQLNonNull } from 'graphql';
import { createField } from '../../../utils';
import { AddFieldGroupListToTemplateInput } from './AddFieldGroupListToTemplateInput';
import { AddFieldGroupListToTemplatePayload } from './AddFieldGroupListToTemplatePayload';

export const addFieldGroupListToTemplate = createField({
  type: new GraphQLNonNull(AddFieldGroupListToTemplatePayload),
  args: {
    input: {
      type: new GraphQLNonNull(AddFieldGroupListToTemplateInput)
    }
  },
  async resolve() {
    //
  }
});
