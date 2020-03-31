import { Exclude, Expose, plainToClass, Transform } from 'class-transformer';
import { immerable } from 'immer';
import { v4 } from 'uuid';
import EggIcon from '../assets/icons/egg.svg';
import { Time } from '../utils/time';

const DEFAULT_BACKGROUND_COLOR = 'hsl(210, 100%, 84%)';

@Exclude()
export class CardModel {
  static of(source: any) {
    return plainToClass(CardModel, source || {});
  }

  readonly [immerable] = true;

  @Expose()
  @Transform((value = v4()) => value)
  id!: string;

  @Expose()
  displayName!: string;

  @Expose()
  @Transform((value = EggIcon) => value)
  image!: string;

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
