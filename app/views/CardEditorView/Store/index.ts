import { combineReducers, createStore } from '@app/utils/store';
import { EntityAction as Entity } from './Entity';
import { ModeAction as Mode } from './Mode';

const reducers = { Entity, Mode };

const reducer = combineReducers(reducers);

export const { StoreProvider, useStore, useSelector, useDispatch } = createStore(reducer);
