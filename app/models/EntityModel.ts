import { TableName, Column, PrimaryKey } from '../libs/orm';

@TableName('Entity')
export class EntityModel {
  @Column.Integer
  @PrimaryKey.AutoIncrement
  id!: number;

  @Column.Text
  thumbnail!: string;

  @Column.Text
  backgroundColor!: string;

  @Column.Text
  displayName!: string;

  @Column.Text
  createdAt!: string;
}
