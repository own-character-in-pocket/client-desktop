import { GraphQLID, GraphQLInputObjectType, GraphQLList, GraphQLNonNull } from 'graphql';
import { FieldGroupInput } from '../../../FIeldGroupInput';

export const AddFieldGroupListToTemplateInput = new GraphQLInputObjectType({
  name: 'AddFieldGroupListToTemplateInput',
  fields: {
    templateId: {
      type: new GraphQLNonNull(GraphQLID)
    },
    fieldGroupList: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(FieldGroupInput)))
    }
  }
});
