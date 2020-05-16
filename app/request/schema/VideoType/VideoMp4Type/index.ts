import { GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { NodeInterface } from '../../NodeInterface';
import { VideoInterface } from '../VideoInterface';

export const VideoMp4Type = new GraphQLObjectType({
  name: 'VideoMp4Type',
  interfaces: [NodeInterface, VideoInterface],
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    width: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    height: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    time: {
      type: new GraphQLNonNull(GraphQLInt)
    }
  }
});
