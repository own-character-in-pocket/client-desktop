import { GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { NodeInterface } from '../../NodeInterface';
import { AudioInterface } from '../AudioInterface';

export const AudioMp3Type = new GraphQLObjectType({
  name: 'AudioMp3Type',
  interfaces: [NodeInterface, AudioInterface],
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    quality: {
      type: new GraphQLNonNull(GraphQLString)
    }
  }
});
