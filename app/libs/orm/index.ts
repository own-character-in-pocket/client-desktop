import { Database } from 'sqlite3';
import { createDDL } from './createDDL';
import { Model } from './types';

export * from './decorator';
export * from './types';

export class ORM {
  static create<M extends Model>(fileName: string, tableList: readonly M[]): ORM {
    const database = new Promise<Database>(async resolve => {
      const database = new Database(fileName);
      await this.createTableList(database, tableList);
      resolve(database);
    });
    return new ORM(database);
  }

  constructor(private readonly database: Promise<Database>) {}

  private static async createTableList<M extends Model>(database: Database, modelList: readonly M[]): Promise<void> {
    await Promise.all(modelList.map(model => this.createTable(database, model)));
  }

  private static createTable<M extends Model>(database: Database, model: M): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      database.exec(createDDL(model), error => {
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
