import { EntityModel } from '@app/models';
import { createDuck } from '@app/utils/store';

const createInitialState = () => ({
  current: EntityModel.of({
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
    reset(state, character: EntityModel) {
      state.current = character;
    },
    setCardTypeId(state, cardTypeId: number) {
      state.current.cardTypeId = cardTypeId;
    },
    setDisplayName(state, displayName: string) {
      state.current.displayName = displayName;
    },
    setImage(state, image: string) {
      state.current.thumbnail = image;
    },
    setBackgroundColor(state, backgroundColor: string) {
      state.current.backgroundColor = backgroundColor;
    },
    setTagList(state, tagList: string[]) {
      state.current.tagList = tagList;
    }
  }
});
