import { graphql, printSchema } from 'graphql';
import { createContext } from './context';
// import { initializeRepositories } from './repositories';
import { Schema } from './schema';

export const request = (query: string, variables: Record<string, any> = {}) =>
  graphql({
    schema: Schema,
    source: query,
    variableValues: variables,
    contextValue: createContext()
  });

console.log(printSchema(Schema));
