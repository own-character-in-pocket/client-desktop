import { TableName, Column, PrimaryKey } from '../libs/orm';

@TableName('Universe')
export class UniverseModel {
  @Column.Integer
  @PrimaryKey.AutoIncrement
  id!: number;

  @Column.Text
  thumbnail!: string;

  @Column.Text
  backgroundColor!: string;

  @Column.Text
  displayName!: string;
}
