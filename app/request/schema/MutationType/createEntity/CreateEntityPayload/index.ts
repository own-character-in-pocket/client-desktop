import { GraphQLObjectType } from 'graphql';
import { EntityType } from '../../../EntityType';

export const CreateEntityPayload = new GraphQLObjectType({
  name: 'CreateEntityPayload',
  fields: {
    entity: {
      type: EntityType
    }
  }
});
