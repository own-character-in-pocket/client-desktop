import { GraphQLID, GraphQLInputObjectType, GraphQLList, GraphQLNonNull } from 'graphql';
import { FieldInput } from '../../../FieldInput';

export const AddFieldListToFieldGroupInput = new GraphQLInputObjectType({
  name: 'AddFieldListToFieldGroupInput',
  fields: {
    fieldGroupId: {
      type: new GraphQLNonNull(GraphQLID)
    },
    fieldList: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(FieldInput)))
    }
  }
});
