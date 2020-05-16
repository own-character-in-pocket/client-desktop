import { GraphQLScalarType } from 'graphql';

export const ColorScalar = new GraphQLScalarType({
  name: 'Color',
  serialize() {
    throw new Error('Not implemented!');
  },
  parseLiteral() {
    throw new Error('Not implemented!');
  },
  parseValue() {
    throw new Error('Not implemented!');
  }
});
