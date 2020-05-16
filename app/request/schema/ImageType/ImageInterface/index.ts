import { GraphQLID, GraphQLInt, GraphQLInterfaceType, GraphQLNonNull } from 'graphql';
import { NodeInterface } from '../../NodeInterface';

export const ImageInterface = new GraphQLInterfaceType({
  name: 'ImageInterface',
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
    }
  }
});
