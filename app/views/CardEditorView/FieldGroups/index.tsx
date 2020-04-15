import { Color, Radius, Size, Swatch } from '@app/constants/CSSVariables';
import React from 'react';
import styled from 'styled-components';
import { useStore } from '../Store';
import { ModeAction } from '../Store/Mode';
import { FieldGroup } from './FieldGroup';

const Layout = styled.div``;

const ToggleMode = styled.div`
  z-index: 1;

  position: sticky;
  top: 0;

  padding: 0.5rem 0.25rem;

  background-color: ${Swatch.White};
`;

const ToggleButton = styled.button`
  padding: 0 0.25rem;

  border-radius: ${Radius.Normal};
  box-shadow: 0 0 0 ${Size.BoxShadowThickness} ${Color.BoxShadowHover};
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
