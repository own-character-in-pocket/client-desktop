import { CharacterModel } from '../../../../models/Character';
import { createDuck } from '../../../../utils/store';

const createInitialState = () => ({
  current: CharacterModel.of({
    displayName: 'Danuel',
    personalColor: 'hsl(210, 100%, 84%)',
    relationshipList: [
      { displayName: 'Danuel', personalColor: 'hsl(0, 100%, 84%)' },
      { displayName: 'Danuel', personalColor: 'hsl(330, 100%, 84%)' }
    ]
  })
});

export const CharacterAction = createDuck({
  namespace: 'Character',
  createInitialState,
  reducers: {
    reset(state, character: CharacterModel) {
      state.current = character;
    },
    setDisplayName(state, displayName: string) {
      state.current.displayName = displayName;
    },
    setImage(state, image: string) {
      state.current.image = image;
    },
    setPersonalColor(state, personalColor: string) {
      state.current.personalColor = personalColor;
    },
    setStory(state, story: string) {
      state.current.story = story;
    },
    setMemo(state, memo: string) {
      state.current.memo = memo;
    },
    setTagList(state, tagList: string[]) {
      state.current.tagList = tagList;
    }
  }
});
