import { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { createFieldMap } from '../../utils';
import { ColorScalar } from '../ColorScalar';
import { DatetimeScalar } from '../DatetimeScalar';
import { EntityType } from '../EntityType';
import { NodeInterface } from '../NodeInterface';
import { TemplateType } from '../TemplateType';
import { UriScalar } from '../UriScalar';

export const UniverseType: GraphQLObjectType = new GraphQLObjectType({
  name: 'UniverseType',
  interfaces: [NodeInterface],
  fields: () =>
    createFieldMap({
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      thumbnail: {
        type: new GraphQLNonNull(UriScalar)
      },
      backgroundColor: {
        type: new GraphQLNonNull(ColorScalar)
      },
      displayName: {
        type: new GraphQLNonNull(GraphQLString)
      },
      createdAt: {
        type: new GraphQLNonNull(DatetimeScalar)
      },
      entities: {
        type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(EntityType)))
      },
      templates: {
        type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(TemplateType)))
      }
    })
});
