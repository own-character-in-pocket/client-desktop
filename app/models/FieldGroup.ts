import { Exclude, Expose, plainToClass, Transform } from 'class-transformer';
import { immerable } from 'immer';
import { FieldModel } from './Field';

@Exclude()
export class FieldGroupModel {
  static of(source: any) {
    return plainToClass(FieldGroupModel, source || {});
  }

  readonly [immerable] = true;

  @Expose()
  id!: number;

  @Expose()
  cardId!: number;

  @Expose()
  @Transform((value = '') => value)
  displayName!: string;

  @Expose()
  order!: number;

  @Expose()
  @Transform((value = [null]) => value.map(FieldModel.of))
  fieldList!: FieldModel[];
}
