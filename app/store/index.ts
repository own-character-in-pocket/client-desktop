import { Reducer } from 'react';
import { combineReducers, createStore } from '../utils/store';
import { CharacterAction as Character } from './Character';
import { SidebarAction as Sidebar } from './Sidebar';

export type AppStore = {
  [key in keyof typeof reducers]: typeof reducers[key] extends Reducer<infer S, any> ? S : never;
};

const reducers = { Character, Sidebar };

const reducer = combineReducers(reducers);

export const {
  StoreProvider: AppStoreProvider,
  useStore: useAppStore,
  useSelector: useAppSelector,
  useDispatch: useAppDispatch
} = createStore(reducer);
