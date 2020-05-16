import { GraphQLID, GraphQLInt, GraphQLInterfaceType, GraphQLNonNull } from 'graphql';
import { NodeInterface } from '../../NodeInterface';

export const VideoInterface = new GraphQLInterfaceType({
  name: 'VideoInterface',
  interfaces: [NodeInterface],
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
