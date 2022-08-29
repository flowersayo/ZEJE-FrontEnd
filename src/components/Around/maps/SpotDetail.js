import {View, Text} from 'react-native';
import React from 'react';
import styled from 'styled-components';
import {palette, theme} from '../../../styles/theme';
import font from '../../../styles/font';
import SvgIcon from '../../common/SvgIcon';
import DropShadow from 'react-native-drop-shadow';
import SizedBox from '../../common/SizedBox';
const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  align-items: flex-start;
  width: 370px;
  padding: 5px 20px;
`;

const Wrapper = styled.View`
  display: flex;
  //width: 256px;
  justify-content: center;

  align-items: flex-start;
`;
const IconContainer = styled.TouchableOpacity`
  display: flex;
  width: 24px;
  height: 46px;
  justify-content: center;
  align-items: center;
`;

//컨테이너에 shadow추가 필요
export default function SpotDetail({spotInfo, navigation}) {
  return (
    <DropShadow
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.06,
        shadowRadius: 5,
      }}>
      <Container>
        <Wrapper>
          <font.title.Subhead3>{spotInfo.name}</font.title.Subhead3>
          <SizedBox height={9} />
          <font.body.Body1>{spotInfo.location}</font.body.Body1>
        </Wrapper>
        <IconContainer
          onPress={() => {
            //navigation.navigate(스팟 상세보기 스크린)

            console.log('스팟 상세보기 스크린으로 이동');
          }}>
          <SvgIcon name="RightArrow" size={'30px'} color={theme.colors.main} />
        </IconContainer>
      </Container>
    </DropShadow>
  );
}
