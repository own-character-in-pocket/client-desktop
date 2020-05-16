import { GraphQLID, GraphQLInterfaceType, GraphQLNonNull } from 'graphql';

export const NodeInterface = new GraphQLInterfaceType({
  name: 'NodeInterface',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  }
});
