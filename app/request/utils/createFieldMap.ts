import { GraphQLFieldConfigMap } from 'graphql';

import { Context } from '../context';

export const createFieldMap = <TSource = any>(fieldMap: GraphQLFieldConfigMap<TSource, Context>) =>
  fieldMap as GraphQLFieldConfigMap<any, any>;
