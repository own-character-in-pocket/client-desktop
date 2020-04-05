import { EntityModel } from '@app/models';
import { createDuck } from '@app/utils/store';

const createInitialState = () => ({
  list: [
    EntityModel.of({
      id: 0,
      displayName: 'Danuel',
      backgroundColor: 'hsl(210, 100%, 84%)',
      relationshipList: [
        { displayName: 'Danuel', backgroundColor: 'hsl(0, 100%, 84%)' },
        { displayName: 'Danuel', backgroundColor: 'hsl(330, 100%, 84%)' }
      ]
    }),
    EntityModel.of({ id: 1, displayName: 'Danuel', backgroundColor: 'hsl(0, 100%, 84%)' }),
    EntityModel.of({ id: 2, displayName: 'Danuel', backgroundColor: 'hsl(330, 100%, 84%)' })
  ]
});

export const EntityAction = createDuck({
  namespace: 'Entity',
  createInitialState,
  reducers: {
    add(state, character: EntityModel) {
      state.list.push(character);
    },
    remove(state, character: EntityModel) {
      state.list = state.list.filter(({ id }) => character.id === id);
    }
  }
});
