import React from 'react';
import styled from 'styled-components';
import { FieldGroup } from './FieldGroup';
import { CardFieldGroupModel } from '@app/models/CardFieldGroup';

const Layout = styled.div``;

export const FieldGroups = () => {
  const fieldGroupList = Array.from({ length: 3 }, (_, index) => CardFieldGroupModel.of({ id: index }));
  return (
    <Layout>
      {fieldGroupList.map(fieldGroup => (
        <FieldGroup key={fieldGroup.id} model={fieldGroup} />
      ))}
    </Layout>
  );
};
