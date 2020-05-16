import { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { createFieldMap } from '../../utils';
import { DatetimeScalar } from '../DatetimeScalar';
import { EntityInterface } from '../EntityInterface';
import { FieldGroupType } from '../FieldGroupType';
import { NodeInterface } from '../NodeInterface';
import { UniverseType } from '../UniverseType';
import { UriScalar } from '../UriScalar';

export const EntityType: GraphQLObjectType = new GraphQLObjectType({
  name: 'EntityType',
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
      createdAt: {
        type: new GraphQLNonNull(DatetimeScalar)
      },
      fieldGroups: {
        type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(FieldGroupType)))
      },
      universes: {
        type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(UniverseType)))
      }
    })
});
