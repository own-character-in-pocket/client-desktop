import { GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { NodeInterface } from '../../NodeInterface';
import { VideoInterface } from '../VideoInterface';

export const VideoAviType = new GraphQLObjectType({
  name: 'VideoAviType',
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
