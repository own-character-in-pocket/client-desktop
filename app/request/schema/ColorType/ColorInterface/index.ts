import { GraphQLInt, GraphQLInterfaceType, GraphQLNonNull } from 'graphql';
import { NodeInterface } from '../../NodeInterface';

export const ColorInterface = new GraphQLInterfaceType({
  name: 'ColorInterface',
  interfaces: [NodeInterface],
  fields: {
    r: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    g: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    b: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    a: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    h: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    s: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    l: {
      type: new GraphQLNonNull(GraphQLInt)
    }
  }
});
