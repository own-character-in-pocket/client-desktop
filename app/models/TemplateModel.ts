import { TableName, Column, PrimaryKey } from '../libs/orm';

@TableName('Template')
export class TemplateModel {
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
