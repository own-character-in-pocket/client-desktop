import { createStore, combineReducers } from '../../../utils/store';
import { CharacterAction as Character } from './Character';

const reducers = { Character };

const reducer = combineReducers(reducers);

export const { StoreProvider, useStore, useSelector, useDispatch } = createStore(reducer);
