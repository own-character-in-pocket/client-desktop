import { GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { VideoInterface } from '../VideoInterface';

export const VideoMp4Type = new GraphQLObjectType({
  name: 'VideoMp4Type',
  interfaces: [VideoInterface],
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
