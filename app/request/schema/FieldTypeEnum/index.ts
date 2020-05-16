import { GraphQLEnumType } from 'graphql';

export const FieldTypeEnum = new GraphQLEnumType({
  name: 'FieldTypeEnum',
  values: {
    AUDIO: {
      value: 'AUIDO'
    },
    COLOR: {
      value: 'COLOR'
    },
    COLOR_PALETTE: {
      value: 'COLOR_PALETTE'
    },
    IMAGE: {
      value: 'IMAGE'
    },
    MULTILINE: {
      value: 'MULTILINE'
    },
    NUMBER: {
      value: 'NUMBER'
    },
    TEXT: {
      value: 'TEXT'
    },
    VIDEO: {
      value: 'VIDEO'
    }
  }
});
