import { InputType } from '@app/constants/InputType';
import { EntityModel, FieldGroupModel, FieldModel } from '@app/models';
import { createDuck } from '@app/utils/store';

const createInitialState = () => ({
  current: EntityModel.of({
    displayName: 'Danuel',
    backgroundColor: 'hsl(210, 100%, 84%)',
    relationshipList: [
      { displayName: 'Danuel', backgroundColor: 'hsl(0, 100%, 84%)' },
      { displayName: 'Danuel', backgroundColor: 'hsl(330, 100%, 84%)' }
    ],
    fieldGroupList: [
      FieldGroupModel.of({
        id: 0,
        displayName: '기본 프로필',
        fieldList: [
          FieldModel.of({
            id: 0,
            type: InputType.Text,
            displayName: '이름',
            value: '다뉴엘'
          }),
          FieldModel.of({
            id: 1,
            type: InputType.Text,
            displayName: '영어 이름',
            value: 'Danuel'
          }),
          FieldModel.of({
            id: 2,
            type: InputType.Text,
            displayName: '직업',
            value: '프로그래머'
          })
        ]
      })
    ]
  })
});

export const EntityAction = createDuck({
  namespace: 'Entity',
  createInitialState,
  reducers: {
    reset(state, character: EntityModel) {
      state.current = character;
    },

    // Entity
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
    },

    // FieldGroup
    addFieldGroup(state, index: number) {
      state.current.fieldGroupList.splice(index + 1, 0, FieldGroupModel.of(null));
    },
    removeFieldGroup(state, index: number) {
      state.current.fieldGroupList.splice(index, 1);
    },
    setFieldGroupDisplayName(state, payload: { index: number; displayName: string }) {
      state.current.fieldGroupList[payload.index].displayName = payload.displayName;
    },
    setFieldGroupOrder(state, payload: { index: number; order: number }) {
      state.current.fieldGroupList[payload.index].order = payload.order;
    },

    // Field
    addField(state, payload: { groupIndex: number; index: number }) {
      const fieldGroup = state.current.fieldGroupList[payload.groupIndex];
      fieldGroup.fieldList.splice(payload.index + 1, 0, FieldModel.of(null));
    },
    removeField(state, payload: { groupIndex: number; index: number }) {
      const fieldGroup = state.current.fieldGroupList[payload.groupIndex];
      fieldGroup.fieldList.splice(payload.index, 1);
    },
    setFieldType(state, payload: { groupIndex: number; index: number; type: InputType }) {
      const fieldGroup = state.current.fieldGroupList[payload.groupIndex];
      const field = fieldGroup.fieldList[payload.index];
      if (field.type !== payload.type) {
        field.type = payload.type;
        field.value = getDefaultValue(payload.type);
      }
    },
    setFieldDisplayName(state, payload: { groupIndex: number; index: number; displayName: string }) {
      const fieldGroup = state.current.fieldGroupList[payload.groupIndex];
      const field = fieldGroup.fieldList[payload.index];
      field.displayName = payload.displayName;
    },
    setFieldValue(state, payload: { groupIndex: number; index: number; value: any }) {
      const fieldGroup = state.current.fieldGroupList[payload.groupIndex];
      const field = fieldGroup.fieldList[payload.index];
      field.value = payload.value;
    }
  }
});

const getDefaultValue = (type: InputType) => {
  switch (type) {
    case InputType.Multiline: {
      return '';
    }
    case InputType.Number: {
      return 0;
    }
    case InputType.Text: {
      return '';
    }
  }
};
