import { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { createFieldMap } from '../../utils';
import { EntityInterface } from '../EntityInterface';
import { FieldGroupType } from '../FieldGroupType';
import { NodeInterface } from '../NodeInterface';
import { UniverseType } from '../UniverseType';
import { UriScalar } from '../UriScalar';

export const TemplateType: GraphQLObjectType = new GraphQLObjectType({
  name: 'TemplateType',
  interfaces: [NodeInterface, EntityInterface],
  fields: () =>
    createFieldMap({
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      thumbnail: {
        type: new GraphQLNonNull(UriScalar)
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
