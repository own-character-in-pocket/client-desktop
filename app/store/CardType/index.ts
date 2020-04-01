import { CardTypeModel } from '@app/models/CardType';
import { createDuck } from '@app/utils/store';

const createInitialState = () => ({
  map: new Map<number, CardTypeModel>()
});

export const CardTypeAction = createDuck({
  namespace: 'CardType',
  createInitialState,
  reducers: {
    clear(state) {
      state.map.clear();
    },
    add(state, cardType: CardTypeModel) {
      state.map.set(cardType.id, cardType);
    },
    remove(state, id: number) {
      state.map.delete(id);
    }
  }
});
