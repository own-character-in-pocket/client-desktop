import { GraphQLScalarType } from 'graphql';

export const DatetimeScalar = new GraphQLScalarType({
  name: 'Datetime',
  serialize() {
    throw new Error('Not implmented!');
  },
  parseValue() {
    throw new Error('Not implmented!');
  },
  parseLiteral() {
    throw new Error('Not implmented!');
  }
});
