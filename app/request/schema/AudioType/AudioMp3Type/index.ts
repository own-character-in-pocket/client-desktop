import { GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { AudioInterface } from '../AudioInterface';

export const AudioMp3Type = new GraphQLObjectType({
  name: 'AudioMp3Type',
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
