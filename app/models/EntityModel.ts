import { Model, ColumnType } from '../libs/orm';

export class EntityModel extends Model {
  static get Empty() {
    return new EntityModel();
  }

  readonly tableName = 'Entity';
  readonly columns = {
    id: {
      type: ColumnType.Integer,
      isAutoIncrement: true
    },
    thumbnail: {
      type: ColumnType.Text
    },
    backgroundColor: {
      type: ColumnType.Text
    },
    displayName: {
      type: ColumnType.Text
    },
    createdAt: {
      type: ColumnType.Text
    }
  } as const;

  readonly id!: number;
  readonly thumbnail!: string;
  readonly backgroundColor!: string;
  readonly displayName!: string;
  readonly createdAt!: string;
}
