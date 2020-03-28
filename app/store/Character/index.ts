import { CharacterModel } from '../../models/Character';
import { createDuck } from '../../utils/store';

const createInitialState = () => ({
  list: [
    CharacterModel.of({
      displayName: 'Danuel',
      personalColor: 'hsl(210, 100%, 84%)',
      relationshipList: [
        { displayName: 'Danuel', personalColor: 'hsl(0, 100%, 84%)' },
        { displayName: 'Danuel', personalColor: 'hsl(330, 100%, 84%)' }
      ]
    }),
    CharacterModel.of({ displayName: 'Danuel', personalColor: 'hsl(0, 100%, 84%)' }),
    CharacterModel.of({ displayName: 'Danuel', personalColor: 'hsl(330, 100%, 84%)' })
  ]
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
