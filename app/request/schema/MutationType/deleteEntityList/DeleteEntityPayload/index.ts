import { GraphQLObjectType } from 'graphql';
import { EntityType } from '../../../EntityType';

export const DeleteEntityPayload = new GraphQLObjectType({
  name: 'DeleteEntityPayload',
  fields: {
    entity: {
      type: EntityType
    }
  }
});
