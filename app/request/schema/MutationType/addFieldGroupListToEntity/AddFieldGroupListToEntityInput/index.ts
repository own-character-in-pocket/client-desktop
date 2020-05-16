import { GraphQLID, GraphQLInputObjectType, GraphQLList, GraphQLNonNull } from 'graphql';
import { FieldGroupInput } from '../../../FIeldGroupInput';

export const AddFieldGroupListToEntityInput = new GraphQLInputObjectType({
  name: 'AddFieldGroupListToEntityInput',
  fields: {
    entityId: {
      type: new GraphQLNonNull(GraphQLID)
    },
    fieldGroupList: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(FieldGroupInput)))
    }
  }
});
