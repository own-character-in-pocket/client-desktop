import { createDuck } from '@app/utils/store';

const createInitialState = () => ({
  cards: new Set<number>()
});

export const SidebarAction = createDuck({
  namespace: 'Sidebar',
  createInitialState,
  reducers: {
    addCharacter(state, id: number) {
      state.cards.add(id);
    },
    removeCharacter(state, id: number) {
      state.cards.delete(id);
    }
  }
});
