import { GraphQLUnionType } from 'graphql';
import { AudioMp3Type } from './AudioMp3Type';
import { AudioWavType } from './AudioWavType';

export const AudioType = new GraphQLUnionType({
  name: 'AudioType',
  types: [AudioMp3Type, AudioWavType],
  resolveType(parent) {
    switch (parent.extension) {
      case 'Mp3': {
        return AudioMp3Type;
      }
      case 'Wav': {
        return AudioWavType;
      }
    }
    throw new Error('Not implemented');
  }
});
