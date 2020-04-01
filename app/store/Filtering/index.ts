import { createDuck } from '@app/utils/store';

const createInitialState = () => ({
  tags: new Set<string>(),
  filtering: {} as Record<string, any>
});

export const FilteringAction = createDuck({
  namespace: 'Filtering',
  createInitialState,
  reducers: {
    clear(state) {
      state.filtering = {};
    },
    addTag(state, tag: string) {
      state.tags.add(tag);
    },
    set(state, { key, value }: { key: string; value: any }) {
      state.filtering[key] = value;
    }
  }
});
