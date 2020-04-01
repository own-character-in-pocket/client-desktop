import { combineReducers, createStore } from '@app/utils/store';
import { Reducer } from 'react';
import { CardAction as Card } from './Card';
import { CardTypeAction as CardType } from './CardType';
import { FilteringAction as Filtering } from './Filtering';
import { SidebarAction as Sidebar } from './Sidebar';

export type AppStore = {
  [key in keyof typeof reducers]: typeof reducers[key] extends Reducer<infer S, any> ? S : never;
};

const reducers = { Card, CardType, Filtering, Sidebar };

const reducer = combineReducers(reducers);

export const {
  StoreProvider: AppStoreProvider,
  useStore: useAppStore,
  useSelector: useAppSelector,
  useDispatch: useAppDispatch
} = createStore(reducer);
