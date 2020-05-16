import { GraphQLID, GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import { ColorScalar } from '../../../ColorScalar';
import { UriScalar } from '../../../UriScalar';

export const UpdateUniverseInput = new GraphQLInputObjectType({
  name: 'UpdateUniverseInput',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    thumbnail: {
      type: UriScalar
    },
    backgroundColor: {
      type: ColorScalar
    },
    displayName: {
      type: GraphQLString
    }
  }
});
