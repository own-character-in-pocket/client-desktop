import 'reflect-metadata';
import { AUTO_INCREMENT, COLUMN, PRIMARY_KEY, TABLE_NAME, UNIQUE } from './constants';
import { ColumnMetadata, UniqueMetadata } from './decorator';
import { Model } from './types';

export const createDDL = <M extends Model>(model: M): string => {
  if (!Reflect.hasMetadata(TABLE_NAME, model.prototype)) {
    throw new Error('Table Name을 정의하지 않은 모델입니다.');
  }
  if (!Reflect.hasMetadata(PRIMARY_KEY, model.prototype)) {
    throw new Error('Primary Key를 정의하지 않은 모델입니다.');
  }
  if (!Reflect.hasMetadata(COLUMN, model.prototype)) {
    throw new Error('정의한 column이 없습니다.');
  }

  const tableName: string = Reflect.getMetadata(TABLE_NAME, model.prototype);
  const autoIncrementPropertyKey: undefined | string = Reflect.getMetadata(AUTO_INCREMENT, model.prototype);
  const primaryKeyMap: readonly string[] = Reflect.getMetadata(PRIMARY_KEY, model.prototype);
  const columnMap: Map<string, ColumnMetadata> = Reflect.getMetadata(COLUMN, model.prototype);
  const uniqueList: readonly UniqueMetadata[] = Reflect.getMetadata(UNIQUE, model.prototype) || [];

  const columnDefinition = Array.from(columnMap).map(([name, { typeName, isNullable }]) =>
    [name, typeName, !isNullable && 'NOT NULL', autoIncrementPropertyKey === name && 'AUTOINCREMENT'].filter(Boolean).join(' ')
  );
  const primaryKeyDefinition = `PRIMARY KEY(${primaryKeyMap})`;
  const uniqueDefinition = uniqueList.map(uniqueColumnList => `UNIQUE(${uniqueColumnList.join(', ')})`);

  const definition = columnDefinition.concat(primaryKeyDefinition, uniqueDefinition).join(', ');
  return `CREATE TABLE IF NOT EXISTS \`${tableName}\` (${definition})`;
};
