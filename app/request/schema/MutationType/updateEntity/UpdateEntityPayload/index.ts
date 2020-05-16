import { GraphQLObjectType } from 'graphql';
import { EntityType } from '../../../EntityType';

export const UpdateEntityPayload = new GraphQLObjectType({
  name: 'UpdateEntityPayload',
  fields: {
    entity: {
      type: EntityType
    }
  }
});
