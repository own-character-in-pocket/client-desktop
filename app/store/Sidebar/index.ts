import { createDuck } from '../../utils/store';

const createInitialState = () => ({
  characters: new Set<string>()
});

export const SidebarAction = createDuck({
  namespace: 'Sidebar',
  createInitialState,
  reducers: {
    addCharacter(state, id: string) {
      state.characters.add(id);
    },
    removeCharacter(state, id: string) {
      state.characters.delete(id);
    }
  }
});
