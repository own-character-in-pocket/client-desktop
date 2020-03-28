import { Exclude, Expose, plainToClass, Transform } from 'class-transformer';
import { v4 } from 'uuid';
import { Time } from '../utils/time';

@Exclude()
export class CharacterModel {
  static of(source: any) {
    return plainToClass(CharacterModel, source || {});
  }

  @Expose()
  @Transform((value = v4()) => value)
  id!: string;

  @Expose()
  displayName!: string;

  @Expose()
  @Transform(value => Time(value))
  createdAt!: Time;
}
