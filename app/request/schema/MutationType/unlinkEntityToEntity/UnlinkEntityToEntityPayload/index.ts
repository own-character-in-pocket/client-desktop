import { GraphQLObjectType } from 'graphql';
import { EntityType } from '../../../EntityType';

export const UnlinkEntityToEntityPayload = new GraphQLObjectType({
  name: 'UnlinkEntityToEntityPayload',
  fields: {
    from: {
      type: EntityType
    },
    to: {
      type: EntityType
    }
  }
});
