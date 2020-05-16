import { GraphQLID, GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import { ColorScalar } from '../../../ColorScalar';
import { UriScalar } from '../../../UriScalar';

export const CreateEntityInput = new GraphQLInputObjectType({
  name: 'CreateEntityInput',
  fields: {
    thumbnail: {
      type: new GraphQLNonNull(UriScalar)
    },
    backgroundColor: {
      type: new GraphQLNonNull(ColorScalar)
    },
    displayName: {
      type: new GraphQLNonNull(GraphQLString)
    },
    linkTo: {
      type: new GraphQLNonNull(GraphQLID)
    }
  }
});
