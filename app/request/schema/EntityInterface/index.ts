import { GraphQLID, GraphQLInterfaceType, GraphQLNonNull, GraphQLString } from 'graphql';
import { createFieldMap } from '../../utils';
import { NodeInterface } from '../NodeInterface';
import { UriScalar } from '../UriScalar';

export const EntityInterface = new GraphQLInterfaceType({
  name: 'EntityInterface',
  interfaces: [NodeInterface],
  fields: createFieldMap({
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
    }
  })
});
