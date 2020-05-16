import { GraphQLObjectType } from 'graphql';
import { EntityType } from '../../../EntityType';

export const LinkEntityToEntityPayload = new GraphQLObjectType({
  name: 'LinkEntityToEntityPayload',
  fields: {
    from: {
      type: EntityType
    },
    to: {
      type: EntityType
    }
  }
});
