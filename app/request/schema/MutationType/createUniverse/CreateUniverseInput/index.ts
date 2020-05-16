import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import { ColorScalar } from '../../../ColorScalar';
import { UriScalar } from '../../../UriScalar';

export const CreateUniverseInput = new GraphQLInputObjectType({
  name: 'CreateUniverseInput',
  fields: {
    thumbnail: {
      type: new GraphQLNonNull(UriScalar)
    },
    backgroundColor: {
      type: new GraphQLNonNull(ColorScalar)
    },
    displayName: {
      type: new GraphQLNonNull(GraphQLString)
    }
  }
});
