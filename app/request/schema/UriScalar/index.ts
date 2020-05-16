import { GraphQLScalarType } from 'graphql';

export const UriScalar = new GraphQLScalarType({
  name: 'URI',
  serialize() {
    throw new Error('Not implmented!');
  },
  parseLiteral() {
    throw new Error('Not implmented!');
  },
  parseValue() {
    throw new Error('Not implmented!');
  }
});
