import { GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { VideoInterface } from '../VideoInterface';

export const VideoAviType = new GraphQLObjectType({
  name: 'VideoAviType',
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
