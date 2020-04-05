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
`;

const FieldGroupListContainer = styled.div``;

export const FieldGroups = () => {
  const [{ currentMode, fieldGroupList }, dispatch] = useStore(store => ({
    currentMode: store.Mode.current,
    fieldGroupList: store.Entity.current.fieldGroupList
  }));

  const setViewMode = () => {
    dispatch(ModeAction.setView());
  };

  const setAddMode = () => {
    dispatch(ModeAction.setAdd());
  };

  const setRemoveMode = () => {
    dispatch(ModeAction.setRemove());
  };

  return (
    <Layout>
      <ToggleMode>
        {currentMode.isView && <ToggleButton onClick={setAddMode}>보기 모드</ToggleButton>}
        {currentMode.isAdd && <ToggleButton onClick={setRemoveMode}>추가 모드</ToggleButton>}
        {currentMode.isRemove && <ToggleButton onClick={setViewMode}>제거 모드</ToggleButton>}
      </ToggleMode>
      <FieldGroupListContainer>
        {fieldGroupList.map((fieldGroup, index) => (
          <FieldGroup key={fieldGroup.id} index={index} isAlone={fieldGroupList.length === 1} model={fieldGroup} />
        ))}
      </FieldGroupListContainer>
    </Layout>
  );
};
