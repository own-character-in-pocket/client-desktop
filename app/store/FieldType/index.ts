import { FieldTypeModel } from '@app/models';
import { createDuck } from '@app/utils/store';

const createInitialState = () => ({
  map: new Map<number, FieldTypeModel>()
});

export const FieldTypeAction = createDuck({
  namespace: 'FieldType',
  createInitialState,
  reducers: {
    clear(state) {
      state.map.clear();
    },
    add(state, entityType: FieldTypeModel) {
      state.map.set(entityType.id, entityType);
    },
    remove(state, id: number) {
      state.map.delete(id);
    }
  }
});
