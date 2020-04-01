import { createStore, combineReducers } from '@app/utils/store';
import { CardAction as Card } from './Card';

const reducers = { Card };

const reducer = combineReducers(reducers);

export const { StoreProvider, useStore, useSelector, useDispatch } = createStore(reducer);
