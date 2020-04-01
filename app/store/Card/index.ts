import { CardModel } from '@app/models/Card';
import { createDuck } from '@app/utils/store';

const createInitialState = () => ({
  list: [
    CardModel.of({
      id: 0,
      displayName: 'Danuel',
      backgroundColor: 'hsl(210, 100%, 84%)',
      relationshipList: [
        { displayName: 'Danuel', backgroundColor: 'hsl(0, 100%, 84%)' },
        { displayName: 'Danuel', backgroundColor: 'hsl(330, 100%, 84%)' }
      ]
    }),
    CardModel.of({ id: 1, displayName: 'Danuel', backgroundColor: 'hsl(0, 100%, 84%)' }),
    CardModel.of({ id: 2, displayName: 'Danuel', backgroundColor: 'hsl(330, 100%, 84%)' })
  ]
});

export const CardAction = createDuck({
  namespace: 'Card',
  createInitialState,
  reducers: {
    add(state, character: CardModel) {
      state.list.push(character);
    },
    remove(state, character: CardModel) {
      state.list = state.list.filter(({ id }) => character.id === id);
    }
  }
});
