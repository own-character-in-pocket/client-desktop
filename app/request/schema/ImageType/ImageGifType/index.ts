import { GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { ImageInterface } from '../ImageInterface';

export const ImageGifType = new GraphQLObjectType({
  name: 'ImageGifType',
  interfaces: [ImageInterface],
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
