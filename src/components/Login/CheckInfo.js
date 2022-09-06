import {Row, Pressable} from 'native-base';
import React from 'react';
import styled from 'styled-components/native';
import {Body1} from '../../styles/font';
import {palette} from '../../styles/theme';
import SvgIcon from '../common/SvgIcon';

export default function CheckInfo({onPress, toSChecked, setToSChecked}) {
  const onToggle = () => {
    setToSChecked(prev => !prev);
  };

  return (
    <Wrapper>
      <Pressable onPress={onToggle}>
        <Row space={1}>
          <SvgIcon
            name={toSChecked ? 'CheckedBox' : 'EmptyBox'}
            size={'24px'}
          />
          <Body1>개인 정보 처리 방침 동의하기</Body1>
        </Row>
      </Pressable>
      <Pressable onPress={onPress} pl={10}>
        <SvgIcon name="RightArrow" size={'24px'} color={palette.gray400} />
      </Pressable>
    </Wrapper>
  );
}

const Wrapper = styled.View`
  position: absolute;
  bottom: 170px;
  width: 320px;
  justify-content: space-between;
  flex-direction: row;
`;
