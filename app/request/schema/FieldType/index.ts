import { GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { GraphQLJSONObject } from 'graphql-type-json';
import { FieldTypeEnum } from '../FieldTypeEnum';
import { NodeInterface } from '../NodeInterface';

export const FieldType = new GraphQLObjectType({
  name: 'FieldType',
  interfaces: [NodeInterface],
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    type: {
      type: new GraphQLNonNull(FieldTypeEnum)
    },
    displayName: {
      type: new GraphQLNonNull(GraphQLString)
    },
    value: {
      type: new GraphQLNonNull(GraphQLJSONObject)
    },
    extra: {
      type: new GraphQLNonNull(GraphQLJSONObject)
    }
  }
});
