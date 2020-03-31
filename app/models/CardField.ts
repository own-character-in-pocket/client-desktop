import { Exclude, Expose, plainToClass } from 'class-transformer';

@Exclude()
export class CardFieldModel {
  static of(source: any) {
    return plainToClass(CardFieldModel, source || {});
  }

  @Expose()
  id!: number;

  @Expose()
  groupId!: number;

  @Expose()
  displayName!: string;

  @Expose()
  type!: string;

  @Expose()
  value!: string;

  @Expose()
  order!: number;

  @Expose()
  config!: string;
}
