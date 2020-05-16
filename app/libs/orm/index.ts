import { Database } from 'sqlite3';

export const ColumnType = {
  Blob: 'BLOB',
  Text: 'TEXT',
  Integer: 'INTEGER',
  Real: 'REAL',
  Numeric: 'NUEMRIC'
} as const;

export type RequiredColumnOption = {
  readonly type: string;
  readonly isNullable?: true;
  readonly isUnique?: true;
};

export type AutoIncrementColumnOption = {
  readonly isAutoIncrement?: true;
};

export type PrimaryKeyColumnOption = {
  readonly isPrimaryKey?: Order;
};

export type ColumnOption = RequiredColumnOption & (AutoIncrementColumnOption | PrimaryKeyColumnOption);

export enum Order {
  Ascending = 'ASC',
  Descending = 'DESC',

  Default = Ascending
}

export type ColumnName = string;

export abstract class Model {
  get definition(): string {
    return `CREATE TABLE IF NOT EXISTS \`${this.tableName}\` (${this.columnDefinition})`;
  }

  get tableName(): string {
    throw new Error('Not implemented!');
  }

  get columnDefinition(): string {
    return this.columnList.concat(this.primaryKeyDefinition).join(', ');
  }

  get columnList(): readonly string[] {
    const columnList = Object.entries(this.columns) as ReadonlyArray<readonly [string, RequiredColumnOption & AutoIncrementColumnOption]>;
    return columnList.map(([key, { type, isNullable = false, isAutoIncrement, isUnique }]) =>
      [key, type, !isNullable && 'NOT NULL', isAutoIncrement && 'PRIMARY KEY AUTOINCREMENT', isUnique && 'UNIQUE'].filter(Boolean).join(' ')
    );
  }

  get columns(): Readonly<Record<ColumnName, ColumnOption>> {
    throw new Error('Not implemented!');
  }

  get primaryKeyDefinition(): string {
    const primaryKeys = Object.entries(this.primaryKeys)
      .map(([key, order]) => `${key} ${order}`)
      .join(', ');
    return `PRIMARY KEY(${primaryKeys})`;
  }

  get primaryKeys(): Record<string, Order> {
    const columnList = Object.entries(this.columns) as ReadonlyArray<readonly [string, PrimaryKeyColumnOption]>;
    return columnList.reduce((record, [key, { isPrimaryKey: order }]) => {
      if (order) {
        record[key] = order;
      }
      return record;
    }, {} as Record<string, Order>);
  }
}

export class ORM {
  static create(fileName: string, tableList: readonly Model[]): ORM {
    const database = new Promise<Database>(async resolve => {
      const database = new Database(fileName);
      await this.createTableList(database, tableList);
      resolve(database);
    });
    return new ORM(database);
  }

  constructor(private readonly database: Promise<Database>) {}

  private static async createTableList(database: Database, tableList: readonly Model[]): Promise<void> {
    await Promise.all(tableList.map(table => this.createTable(database, table)));
  }

  private static createTable(database: Database, model: Model): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      database.exec(model.definition, error => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }

  exec<T = any>(sql: string, parameterList: readonly any[] = []): Promise<T> {
    return this.database.then(
      database =>
        new Promise<T>(async (resolve, reject) => {
          database.all(sql, ...parameterList, (error: any, rowList: T) => {
            if (error) {
              reject(error);
            } else {
              resolve(rowList);
            }
          });
        })
    );
  }
}
