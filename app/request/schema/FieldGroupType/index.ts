import { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { createFieldMap } from '../../utils';
import { FieldType } from '../FieldType';
import { NodeInterface } from '../NodeInterface';

export const FieldGroupType = new GraphQLObjectType({
  name: 'FieldGroupType',
  interfaces: [NodeInterface],
  fields: createFieldMap({
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    displayName: {
      type: new GraphQLNonNull(GraphQLString)
    },
    fields: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(FieldType)))
    }
  })
});
