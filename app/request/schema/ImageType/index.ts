import { GraphQLUnionType } from 'graphql';
import { ImageGifType } from './ImageGifType';
import { ImageJpgType } from './ImageJpgType';
import { ImagePngType } from './ImagePngType';

export const ImageType = new GraphQLUnionType({
  name: 'ImageType',
  types: [ImageGifType, ImageJpgType, ImagePngType],
  resolveType(parent) {
    switch (parent.extension) {
      case 'gif': {
        return ImageGifType;
      }
      case 'jpg': {
        return ImageJpgType;
      }
      case 'png': {
        return ImagePngType;
      }
    }
    throw new Error('Not implemented');
  }
});
