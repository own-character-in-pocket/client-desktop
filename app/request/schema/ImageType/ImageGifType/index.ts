import { GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { NodeInterface } from '../../NodeInterface';
import { ImageInterface } from '../ImageInterface';

export const ImageGifType = new GraphQLObjectType({
  name: 'ImageGifType',
  interfaces: [NodeInterface, ImageInterface],
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
