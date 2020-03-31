import { CardModel } from '../../../../models/Card';
import { createDuck } from '../../../../utils/store';

const createInitialState = () => ({
  current: CardModel.of({
    displayName: 'Danuel',
    backgroundColor: 'hsl(210, 100%, 84%)',
    relationshipList: [
      { displayName: 'Danuel', backgroundColor: 'hsl(0, 100%, 84%)' },
      { displayName: 'Danuel', backgroundColor: 'hsl(330, 100%, 84%)' }
    ]
  })
});

export const CardAction = createDuck({
  namespace: 'Card',
  createInitialState,
  reducers: {
    reset(state, character: CardModel) {
      state.current = character;
    },
    setDisplayName(state, displayName: string) {
      state.current.displayName = displayName;
    },
    setImage(state, image: string) {
      state.current.image = image;
    },
    setbackgroundColor(state, backgroundColor: string) {
      state.current.backgroundColor = backgroundColor;
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
