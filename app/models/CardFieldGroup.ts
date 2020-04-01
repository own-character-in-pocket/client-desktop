import { Exclude, Expose, plainToClass, Transform } from 'class-transformer';
import { CardFieldModel } from './CardField';

@Exclude()
export class CardFieldGroupModel {
  static of(source: any) {
    return plainToClass(CardFieldGroupModel, source || {});
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
  @Transform((value = [null, null, null]) => value.map(CardFieldModel.of))
  fieldList!: CardFieldModel[];
}
