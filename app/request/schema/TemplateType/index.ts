import { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { createFieldMap } from '../../utils';
import { EntityInterface } from '../EntityInterface';
import { FieldGroupType } from '../FieldGroupType';
import { UniverseType } from '../UniverseType';

export const TemplateType: GraphQLObjectType = new GraphQLObjectType({
  name: 'TemplateType',
  interfaces: [EntityInterface],
  fields: () =>
    createFieldMap({
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      thumbnail: {
        type: new GraphQLNonNull(GraphQLString)
      },
      backgroundColor: {
        type: new GraphQLNonNull(GraphQLString)
      },
      displayName: {
        type: new GraphQLNonNull(GraphQLString)
      },
      fieldGroups: {
        type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(FieldGroupType)))
      },
      universes: {
        type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(UniverseType)))
      }
    })
});
