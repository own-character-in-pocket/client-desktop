import { GraphQLUnionType } from 'graphql';
import { ColorHslType } from './ColorHslType';
import { ColorRgbType } from './ColorRgbType';

export const ColorType = new GraphQLUnionType({
  name: 'ColorType',
  types: [ColorRgbType, ColorHslType],
  resolveType(parent) {
    switch (parent.type) {
      case 'rgb': {
        return ColorRgbType;
      }
      case 'hsl': {
        return ColorHslType;
      }
    }
    throw new Error('Not implemented!');
  }
});
