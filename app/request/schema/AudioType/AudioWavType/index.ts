import { GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { AudioInterface } from '../AudioInterface';

export const AudioWavType = new GraphQLObjectType({
  name: 'AudioWavType',
  interfaces: [AudioInterface],
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    quality: {
      type: new GraphQLNonNull(GraphQLString)
    }
  }
});
