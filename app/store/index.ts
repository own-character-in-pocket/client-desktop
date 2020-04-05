import { combineReducers, createStore } from '@app/utils/store';
import { Reducer } from 'react';
import { EntityAction as Entity } from './Entity';
import { FieldTypeAction as FieldType } from './FieldType';
import { FilteringAction as Filtering } from './Filtering';
import { SidebarAction as Sidebar } from './Sidebar';

export type AppStore = {
  [key in keyof typeof reducers]: typeof reducers[key] extends Reducer<infer S, any> ? S : never;
};

const reducers = { Entity, FieldType, Filtering, Sidebar };

const reducer = combineReducers(reducers);

export const {
  StoreProvider: AppStoreProvider,
  useStore: useAppStore,
  useSelector: useAppSelector,
  useDispatch: useAppDispatch
} = createStore(reducer);
