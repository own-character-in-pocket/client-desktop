import { Exclude, Expose, plainToClass } from 'class-transformer';

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
}
