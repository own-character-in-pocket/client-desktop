import { Exclude, Expose, plainToClass, Transform } from 'class-transformer';
import { v4 } from 'uuid';
import EggIcon from '../assets/icons/egg.svg';
import { Time } from '../utils/time';

const DEFAULT_PERSONAL_COLOR = 'hsl(210, 100%, 84%)';

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
  @Transform((value = EggIcon) => value)
  image!: string;

  @Expose()
  @Transform((value = DEFAULT_PERSONAL_COLOR) => value)
  personalColor!: string;

  @Expose()
  @Transform(value => Time(value))
  createdAt!: Time;
}
