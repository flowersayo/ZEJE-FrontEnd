import React from 'react';
import {useDeleteDiaryFolderModal} from '../../recoil/useModals';
import ModalSheet from '../../../components/common/modal/ModalSheet';
import {Column} from 'native-base';
import DeleteDiaryCloseButton from '../../../components/Remember/DeleteDiaryCloseButton';
import {Body_long1, Subhead_long3} from '../../../styles/font';
import CloseDiaryCloseButton from '../../../components/Remember/CancelDiaryCloseButton';

const DeleteDiaryModal = () => {
  const {isModalOpen, closeModal} = useDeleteDiaryFolderModal();
  const handleDeleteDiaryBtn = () => {
    console.log('delete diary');
    closeModal();
  };

  return (
    <ModalSheet isModalOpen={isModalOpen} closeModal={closeModal}>
      <Column space={3} alignItems={'center'} w={'100%'}>
        <Subhead_long3>일기 삭제</Subhead_long3>
        <Body_long1>해당 일기를 삭제하시겠어요?</Body_long1>

        <DeleteDiaryCloseButton onPress={handleDeleteDiaryBtn} />
        <CloseDiaryCloseButton onPress={closeModal} />
      </Column>
    </ModalSheet>
  );
};

export default DeleteDiaryModal;
