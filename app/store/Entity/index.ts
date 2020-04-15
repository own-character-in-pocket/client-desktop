import { Color } from '@app/constants/CSSVariables';
import { EntityModel } from '@app/models';
import { createDuck } from '@app/utils/store';

const createInitialState = () => ({
  list: [
    EntityModel.of({
      id: 0,
      displayName: 'Danuel',
      backgroundColor: Color.Blue,
      relationshipList: [
        { displayName: 'Danuel', backgroundColor: Color.Red },
        { displayName: 'Danuel', backgroundColor: Color.Pink }
      ]
    }),
    EntityModel.of({ id: 1, displayName: 'Danuel', backgroundColor: Color.Red }),
    EntityModel.of({ id: 2, displayName: 'Danuel', backgroundColor: Color.Pink })
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
