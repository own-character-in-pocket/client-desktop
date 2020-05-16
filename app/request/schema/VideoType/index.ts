import { GraphQLUnionType } from 'graphql';
import { VideoAviType } from './VideoAviType';
import { VideoMp4Type } from './VideoMp4Type';

export const VideoType = new GraphQLUnionType({
  name: 'VideoType',
  types: [VideoAviType, VideoMp4Type],
  resolveType(parent) {
    switch (parent.extension) {
      case 'avi': {
        return VideoAviType;
      }
      case 'mp4': {
        return VideoMp4Type;
      }
    }
    throw new Error('Not implemented');
  }
});
