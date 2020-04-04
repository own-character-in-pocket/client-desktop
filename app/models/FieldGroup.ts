import { Exclude, Expose, plainToClass, Transform } from 'class-transformer';
import { FieldModel } from './Field';

@Exclude()
export class FieldGroupModel {
  static of(source: any) {
    return plainToClass(FieldGroupModel, source || {});
  }

  @Expose()
  id!: number;

  @Expose()
  cardId!: number;

  @Expose()
  displayName!: string;

  @Expose()
  order!: number;

  @Expose()
  @Transform((value = [null, null, null]) => value.map(FieldModel.of))
  fieldList!: FieldModel[];
}
