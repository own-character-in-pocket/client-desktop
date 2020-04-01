import { Time } from '@app/utils/time';
import { Exclude, Expose, plainToClass, Transform } from 'class-transformer';
import { immerable } from 'immer';

@Exclude()
export class CardTypeModel {
  static of(source: any) {
    return plainToClass(CardTypeModel, source || {});
  }

  readonly [immerable] = true;

  @Expose()
  id!: number;

  @Expose()
  displayName!: string;

  @Expose()
  thumbnail!: string;

  @Expose()
  backgroundColor!: string;

  @Expose()
  icon!: string;

  @Expose()
  @Transform(value => Time(value))
  createdAt!: Time;
}
