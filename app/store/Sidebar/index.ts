import { createDuck } from '../../utils/store';

const createInitialState = () => ({
  cards: new Set<string>()
});

export const SidebarAction = createDuck({
  namespace: 'Sidebar',
  createInitialState,
  reducers: {
    addCharacter(state, id: string) {
      state.cards.add(id);
    },
    removeCharacter(state, id: string) {
      state.cards.delete(id);
    }
  }
});
