import { Reducer } from 'react';
import { combineReducers, createStore } from '../utils/store';
import { CardAction as Card } from './Card';
import { SidebarAction as Sidebar } from './Sidebar';

export type AppStore = {
  [key in keyof typeof reducers]: typeof reducers[key] extends Reducer<infer S, any> ? S : never;
};

const reducers = { Card, Sidebar };

const reducer = combineReducers(reducers);

export const {
  StoreProvider: AppStoreProvider,
  useStore: useAppStore,
  useSelector: useAppSelector,
  useDispatch: useAppDispatch
} = createStore(reducer);
