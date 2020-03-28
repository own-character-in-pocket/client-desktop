import { CharacterModel } from '../../models/Character';
import { createDuck } from '../../utils/store';

const createInitialState = () => ({
  list: [] as CharacterModel[]
});

export const CharacterAction = createDuck({
  namespace: 'Character',
  createInitialState,
  reducers: {
    add(state, character: CharacterModel) {
      state.list.push(character);
    },
    remove(state, character: CharacterModel) {
      state.list = state.list.filter(({ id }) => character.id === id);
    }
  }
});
