import { GraphQLFieldConfig } from 'graphql';

import { Context } from '../context';

type primitive = null | string | number | boolean | undefined;

type DeepReadonly<T> = T extends primitive
  ? T
  : T extends Array<infer U>
  ? ReadonlyArray<DeepReadonly<U>>
  : { readonly [K in keyof T]: DeepReadonly<T[K]> };

export const createField = <TSource = any, TArgs extends Record<string, any> = DeepReadonly<Record<string, any>>>(
  field: GraphQLFieldConfig<TSource, Context, DeepReadonly<TArgs>>
) => field as GraphQLFieldConfig<any, any, any>;
