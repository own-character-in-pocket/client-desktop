import { Model, ColumnType } from '../libs/orm';

export class UniverseModel extends Model {
  static get Empty() {
    return new UniverseModel();
  }

  readonly tableName = 'Universe';
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
    }
  } as const;

  readonly id!: number;
  readonly thumbnail!: string;
  readonly backgroundColor!: string;
  readonly displayName!: string;
}
