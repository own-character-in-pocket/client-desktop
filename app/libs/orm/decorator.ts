import 'reflect-metadata';
import { COLUMN, MAPPER, PRIMARY_KEY, TABLE_NAME, UNIQUE, AUTO_INCREMENT } from './constants';

export type ClassDecorator = <TFunction extends Function>(target: TFunction) => void;
export type PropertyDecorator = (target: Object, propertyKey: string) => void;

const createClassDecorator = (decorator: ClassDecorator): ClassDecorator => decorator;
const createPropertyDecorator = (decorator: PropertyDecorator): PropertyDecorator => decorator;

export const TableName = (name: string): ClassDecorator =>
  createClassDecorator(target => {
    if (Reflect.hasMetadata(TABLE_NAME, target.prototype)) {
      throw new Error('테이블 이름을 중복적으로 정의할 수 없습니다.');
    }
    Reflect.defineMetadata(TABLE_NAME, name, target.prototype);
  });

export type Mapper = (value: any) => any;

export type ColumnMetadata = {
  typeName: string;
  isNullable: boolean;
  mapper: Mapper;
};

const createColumnDecorator = (typeName: string, isNullable: boolean, mapper: Mapper) =>
  createPropertyDecorator((target, propertyKey) => {
    const columnMap: Map<string, ColumnMetadata> = Reflect.getMetadata(COLUMN, target) || new Map();
    if (columnMap.has(propertyKey)) {
      throw new Error('컬럼의 타입을 중복적으로 정의할 수 없습니다.');
    }
    columnMap.set(propertyKey, { typeName, mapper, isNullable });
    Reflect.defineMetadata(COLUMN, columnMap, target);
  });

export const Column = {
  Blob: createColumnDecorator('BLOB', false, String),
  Text: createColumnDecorator('TEXT', false, String),
  Integer: createColumnDecorator('INTEGER', false, Number),
  Real: createColumnDecorator('REAL', false, Number),
  Numeric: createColumnDecorator('NUMERIC', false, String),
  Custom: (typeName: string, mapper: Mapper = String) => createColumnDecorator(typeName, false, mapper),
  Nullable: {
    Blob: createColumnDecorator('BLOB', true, String),
    Text: createColumnDecorator('TEXT', true, String),
    Integer: createColumnDecorator('INTEGER', true, Number),
    Real: createColumnDecorator('REAL', true, Number),
    Numeric: createColumnDecorator('NUMERIC', true, String),
    Custom: (typeName: string, mapper: Mapper = String) => createColumnDecorator(typeName, true, mapper)
  }
};

type PrimaryKey = PropertyDecorator & {
  AutoIncrement: PropertyDecorator;
};

export const PrimaryKey = createPropertyDecorator((target, propertyKey) => {
  if (Reflect.hasMetadata(AUTO_INCREMENT, target)) {
    throw new Error('Auto Increment 속성이 있는 컬럼이 존재합니다.');
  }
  const primaryKeyList: readonly string[] = Reflect.getMetadata(PRIMARY_KEY, target) || [];
  if (primaryKeyList.includes(propertyKey)) {
    throw new Error('컬럼의 Primary Key 속성을 중복적으로 정의할 수 없습니다.');
  }
  Reflect.defineMetadata(PRIMARY_KEY, primaryKeyList.concat(propertyKey), target);
}) as PrimaryKey;

PrimaryKey.AutoIncrement = createPropertyDecorator((target, propertyKey) => {
  if (Reflect.hasMetadata(PRIMARY_KEY, target)) {
    throw new Error('Primary Key 속성이 있는 컬럼이 존재합니다.');
  }
  if (Reflect.hasMetadata(AUTO_INCREMENT, target)) {
    throw new Error('Auto Increment 속성이 있는 컬럼이 존재합니다.');
  }
  Reflect.defineMetadata(PRIMARY_KEY, propertyKey, target);
});

export type UniqueMetadata = readonly [string, ...string[]];

export const Unique = (column: string, ...columnList: readonly string[]): ClassDecorator =>
  createClassDecorator(target => {
    const metadata: readonly UniqueMetadata[] = Reflect.getMetadata(UNIQUE, target.prototype) || [];
    Reflect.defineMetadata(UNIQUE, metadata.concat([[column, ...columnList]]), target.prototype);
  });

export type MapperMetadata = Mapper;

export const Mapper = (mapper: Mapper): PropertyDecorator =>
  createPropertyDecorator((target, propertyKey) => {
    const mappers: Map<string, MapperMetadata> = Reflect.getMetadata(MAPPER, target) || new Map();
    if (mappers.has(propertyKey)) {
      throw new Error('컬럼을 변환하는 방법을 중복적으로 정의할 수 없습니다.');
    }
    mappers.set(propertyKey, mapper);
    Reflect.defineMetadata(MAPPER, mappers, target);
  });
