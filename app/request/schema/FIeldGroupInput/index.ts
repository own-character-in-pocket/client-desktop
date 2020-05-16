import { GraphQLInputObjectType, GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';
import { FieldInput } from '../FieldInput';

export const FieldGroupInput = new GraphQLInputObjectType({
  name: 'FieldGroupInput',
  fields: {
    displayName: {
      type: new GraphQLNonNull(GraphQLString)
    },
    fieldList: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(FieldInput)))
    }
  }
});
