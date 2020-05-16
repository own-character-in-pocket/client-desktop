import { createFieldMap } from '../../utils';
import { GraphQLObjectType } from 'graphql';
import { entity } from './entity';
import { entities } from './entities';
import { template } from './template';
import { templates } from './templates';
import { universe } from './universe';
import { universes } from './universes';

export const QueryType = new GraphQLObjectType({
  name: 'QueryType',
  fields: createFieldMap({
    entity,
    entities,
    template,
    templates,
    universe,
    universes
  })
});
