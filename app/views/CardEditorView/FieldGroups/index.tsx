import React from 'react';
import styled from 'styled-components';
import { useStore } from '../Store';
import { FieldGroup } from './FieldGroup';
import { ModeAction } from '../Store/Mode';

const Layout = styled.div``;

const ToggleMode = styled.div`
  z-index: 1;

  position: sticky;
  top: 0;

  padding: 0.5rem 0.25rem;

  background-color: white;
`;

const ToggleButton = styled.button`
  padding: 0 0.25rem;

  border-radius: 0.25rem;
  box-shadow: 0 0 0 1px hsl(0, 0%, 84%);

  &:hover {
    color: white;
  }
`;

const ToggleToUnremoveableButton = styled(ToggleButton)`
  &:hover {
    background-color: hsl(0, 100%, 64%);
  }
`;

const ToggleToRemoveableButton = styled(ToggleButton)`
  &:hover {
    color: white;
    background-color: hsl(210, 100%, 64%);
  }
`;

const FieldGroupListContainer = styled.div``;

export const FieldGroups = () => {
  const [{ isRemoveable, fieldGroupList }, dispatch] = useStore(store => ({
    isRemoveable: store.Mode.isRemoveable,
    fieldGroupList: store.Entity.current.fieldGroupList
  }));

  const setRemoveable = () => {
    dispatch(ModeAction.setRemoveable(true));
  };

  const setUnremoveable = () => {
    dispatch(ModeAction.setRemoveable(false));
  };

  return (
    <Layout>
      <ToggleMode>
        {isRemoveable && <ToggleToUnremoveableButton onClick={setUnremoveable}>제거 모드</ToggleToUnremoveableButton>}
        {!isRemoveable && <ToggleToRemoveableButton onClick={setRemoveable}>추가 모드</ToggleToRemoveableButton>}
      </ToggleMode>
      <FieldGroupListContainer>
        {fieldGroupList.map((fieldGroup, index) => (
          <FieldGroup key={fieldGroup.id} index={index} isAlone={fieldGroupList.length === 1} model={fieldGroup} />
        ))}
      </FieldGroupListContainer>
    </Layout>
  );
};
