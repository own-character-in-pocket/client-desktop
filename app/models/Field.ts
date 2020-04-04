import { InputType } from '@app/constants/InputType';
import { Exclude, Expose, plainToClass, Transform } from 'class-transformer';
import { immerable } from 'immer';

@Exclude()
export class FieldModel {
  static of(source: any) {
    return plainToClass(FieldModel, source || {});
  }

  readonly [immerable] = true;

  @Expose()
  id!: number;

  @Expose()
  groupId!: number;

  @Expose()
  @Transform((value = '') => value)
  displayName!: string;

  @Expose()
  @Transform((value = InputType.Text) => value)
  type!: InputType;

  @Expose()
  @Transform((value = '') => value)
  value!: string;

  @Expose()
  order!: number;

  @Expose()
  config!: string;
}
