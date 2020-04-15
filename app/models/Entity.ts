import EggIcon from '@app/assets/icons/egg.svg';
import { Color } from '@app/constants/CSSVariables';
import { Time } from '@app/utils/time';
import { Exclude, Expose, plainToClass, Transform } from 'class-transformer';
import { immerable } from 'immer';
import { FieldGroupModel } from './FieldGroup';

@Exclude()
export class EntityModel {
  static of(source: any) {
    return plainToClass(EntityModel, source || {});
  }

  readonly [immerable] = true;

  @Expose()
  id!: number;

  @Expose()
  cardType!: string;

  @Expose()
  displayName!: string;

  @Expose()
  @Transform((value = EggIcon) => value)
  thumbnail!: string;

  @Expose()
  @Transform((value = Color.BackgroundThumbnail) => value)
  backgroundColor!: string;

  @Expose()
  @Transform(value => Time(value))
  createdAt!: Time;

  @Expose()
  @Transform((value = []) => value)
  tagList!: string[];

  @Expose()
  @Transform((value = []) => value.map(EntityModel.of))
  relationshipList!: EntityModel[];

  @Expose()
  @Transform((value = []) => value.map(FieldGroupModel.of))
  fieldGroupList!: FieldGroupModel[];
}
