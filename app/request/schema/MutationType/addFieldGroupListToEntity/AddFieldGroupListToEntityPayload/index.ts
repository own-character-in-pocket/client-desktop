import { GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { EntityType } from '../../../EntityType';

export const AddFieldGroupListToEntityPayload = new GraphQLObjectType({
  name: 'AddFieldGroupListToEntityPayload',
  fields: {
    entity: {
      type: new GraphQLNonNull(EntityType)
    }
  }
});
