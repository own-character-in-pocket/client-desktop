import { createDuck } from '@app/utils/store';
import { immerable } from 'immer';

class Mode {
  static of() {
    return new Mode();
  }

  private constructor() {}

  readonly [immerable] = true;

  state = 'View' as 'View' | 'Add' | 'Remove';

  get isView() {
    return this.state === 'View';
  }

  get isAdd() {
    return this.state === 'Add';
  }

  get isRemove() {
    return this.state === 'Remove';
  }
}

const createInitialState = () => ({
  current: Mode.of()
});

export const ModeAction = createDuck({
  namespace: 'Mode',
  createInitialState,
  reducers: {
    setView(state) {
      state.current.state = 'View';
    },
    setAdd(state) {
      state.current.state = 'Add';
    },
    setRemove(state) {
      state.current.state = 'Remove';
    }
  }
});
