import DataLoader from 'dataloader';
import { orm } from '../../models';

export type Context = ReturnType<typeof createContext>;

export const createContext = () => ({
  loaders: createLoaders()
});

const createLoaders = () => ({
  entity: createLoader('Entity'),
  template: createLoader('Template'),
  universe: createLoader('Universe')
});

const createLoader = <K, V extends { id: K }>(tableName: string) => {
  const sql = `SELECT * FROM \`${tableName}\` WHERE \`id\` in (?)`;
  return new DataLoader<K, null | V>(async keyList => {
    const rowList = await orm.exec<readonly V[]>(sql, keyList);
    const rowMap = new Map<K, V>(rowList.map(row => [row.id, row]));
    return keyList.map(key => rowMap.get(key) || null);
  });
};
