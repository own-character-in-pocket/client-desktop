import { createDuck } from '@app/utils/store';

const createInitialState = () => ({
  isRemoveable: false
});

export const ModeAction = createDuck({
  namespace: 'Mode',
  createInitialState,
  reducers: {
    setRemoveable(state, isRemoveable: boolean) {
      state.isRemoveable = isRemoveable;
    }
  }
});
