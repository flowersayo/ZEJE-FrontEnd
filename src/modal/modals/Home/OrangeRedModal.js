import React from 'react';
import {useOrangeRedModal} from '../../recoil/useModals';
import ModalSheet from '../../../components/common/modal/ModalSheet';
import {Column} from 'native-base';
import {OrangeRed} from '../../../assets/images/oranges';
import {Body_long1, Subhead_long3} from '../../../styles/font';
import ModalButton from '../../../components/home/ModalButton';
import OrangeModalProgressBar from '../../../components/home/oranges/OrangeModalProgressBar';
import {ORANGES_LIST} from '../../../components/home/oranges/OrangeBox';

const OrangeRedModal = () => {
  const {isModalOpen, closeModal} = useOrangeRedModal();
  const maxWalk = ORANGES_LIST[5].maxWalk;

  return (
    <ModalSheet isModalOpen={isModalOpen} closeModal={closeModal}>
      <Column space={3} alignItems={'center'} w={'100%'}>
        <OrangeRed width="100" height="100" />
        <Subhead_long3>붉게 물든 빛 레드향</Subhead_long3>
        <Body_long1>
          껍질과 과육에 붉은 빛이 도는 레드향은 신맛이 적고, 다른 만감류에 비해
          껍질을 벗기기가 편하다는 특징이 있습니다.
        </Body_long1>
        <OrangeModalProgressBar maxWalk={maxWalk} />
        <ModalButton onPress={closeModal} text={'닫기'} />
      </Column>
    </ModalSheet>
  );
};

export default OrangeRedModal;
