import { FieldTypeModel } from '@app/models';
import { createDuck } from '@app/utils/store';

const createInitialState = () => ({
  map: new Map<number, FieldTypeModel>()
});

export const CardTypeAction = createDuck({
  namespace: 'CardType',
  createInitialState,
  reducers: {
    clear(state) {
      state.map.clear();
    },
    add(state, cardType: FieldTypeModel) {
      state.map.set(cardType.id, cardType);
    },
    remove(state, id: number) {
      state.map.delete(id);
    }
  }
});
