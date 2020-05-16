import { GraphQLID, GraphQLInterfaceType, GraphQLNonNull, GraphQLString } from 'graphql';
import { NodeInterface } from '../../NodeInterface';

export const AudioInterface = new GraphQLInterfaceType({
  name: 'AudioInterface',
  interfaces: [NodeInterface],
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    quality: {
      type: new GraphQLNonNull(GraphQLString)
    }
  }
});
