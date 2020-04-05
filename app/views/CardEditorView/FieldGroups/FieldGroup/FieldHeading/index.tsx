import ChevronBottomIcon from '@app/assets/icons/chevron-bottom.svg';
import ChevronUpIcon from '@app/assets/icons/chevron-up.svg';
import CrossBlackIcon from '@app/assets/icons/cross-black.svg';
import CrossRedIcon from '@app/assets/icons/cross-red.svg';
import PlusBlackIcon from '@app/assets/icons/plus-black.svg';
import PlusBlueIcon from '@app/assets/icons/plus-blue.svg';
import { useStore } from '@app/views/CardEditorView/Store';
import { EntityAction } from '@app/views/CardEditorView/Store/Entity';
import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

const Layout = styled.div``;

const Button = styled.button``;

const FoldIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const Heading = styled.input`
  margin-left: 0.625rem;
  padding: 0 0.25rem;

  font-size: 1.25rem;
  font-weight: bolder;
  border-radius: 0.25rem;
  box-shadow: inset 0 0 0 1px hsl(0, 0%, 84%);
  background-color: white;
`;

const Image = styled.img`
  width: 1.5rem;
  height: 1.5rem;

  margin-left: 0.5rem;
  padding: 0.25rem;
`;

const AddButton = styled(Image)`
  &:hover {
    content: url(${PlusBlueIcon});
  }
`;

const DeleteButton = styled(Image)`
  &:hover {
    content: url(${CrossRedIcon});
  }
`;

type Props = {
  index: number;
  displayName: string;
  isFolded: boolean;
  isAlone: boolean;
  toggleToFold: () => void;
};

export const FieldHeading = ({ index, displayName, isFolded, isAlone, toggleToFold }: Props) => {
  const [currentMode, dispatch] = useStore(store => store.Mode.current);

  const setDisplayName = (event: ChangeEvent<HTMLInputElement>) => {
    const displayName = event.target.value;
    dispatch(EntityAction.setFieldGroupDisplayName({ index, displayName }));
  };

  const addFieldGroup = () => {
    dispatch(EntityAction.addFieldGroup(index));
  };

  const removeFieldGroup = () => {
    dispatch(EntityAction.removeFieldGroup(index));
  };

  return (
    <Layout>
      <Button onClick={toggleToFold}>
        <FoldIcon src={isFolded ? ChevronBottomIcon : ChevronUpIcon} />
      </Button>
      <Heading type="text" placeholder="그룹" value={displayName} onChange={setDisplayName} />
      {currentMode.isAdd && (
        <Button onClick={addFieldGroup}>
          <AddButton src={PlusBlackIcon} />
        </Button>
      )}
      {!isAlone && currentMode.isRemove && (
        <Button onClick={removeFieldGroup}>
          <DeleteButton src={CrossBlackIcon} />
        </Button>
      )}
    </Layout>
  );
};
