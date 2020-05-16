import { GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { NodeInterface } from '../../NodeInterface';
import { AudioInterface } from '../AudioInterface';

export const AudioWavType = new GraphQLObjectType({
  name: 'AudioWavType',
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
