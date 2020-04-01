import EggIcon from '@app/assets/icons/egg.svg';
import { Time } from '@app/utils/time';
import { Exclude, Expose, plainToClass, Transform } from 'class-transformer';
import { immerable } from 'immer';

const DEFAULT_BACKGROUND_COLOR = 'hsl(210, 100%, 84%)';

@Exclude()
export class CardModel {
  static of(source: any) {
    return plainToClass(CardModel, source || {});
  }

  readonly [immerable] = true;

  @Expose()
  id!: number;

  @Expose()
  cardTypeId!: number;

  @Expose()
  displayName!: string;

  @Expose()
  @Transform((value = EggIcon) => value)
  thumbnail!: string;

  @Expose()
  @Transform((value = DEFAULT_BACKGROUND_COLOR) => value)
  backgroundColor!: string;

  @Expose()
  @Transform(value => Time(value))
  createdAt!: Time;

  @Expose()
  @Transform((value = []) => value)
  tagList!: string[];

  @Expose()
  @Transform((value = []) => value.map(CardModel.of))
  relationshipList!: CardModel[];
}
