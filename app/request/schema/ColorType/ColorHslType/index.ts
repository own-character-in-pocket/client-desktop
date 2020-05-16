import { GraphQLInt, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { ColorInterface } from '../ColorInterface';

export const ColorHslType = new GraphQLObjectType({
  name: 'ColorHslType',
  interfaces: [ColorInterface],
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