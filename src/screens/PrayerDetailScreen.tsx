import { RouteProp } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useLayoutEffect } from 'react';
import { Pressable, Text } from 'react-native';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { selectors } from '../store/ducks';
import { RootStackParamList } from '../types';
import ArrowBackIcon from '../ui/icons/ArrowBackIcon';
import PrayerIcon from '../ui/icons/PrayerIcon';
import LineIndicator from '../components/LineIndicator';
import CounterPrayer from '../components/CounterPrayer';

type PrayerDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  'PrayersDetail'
>;
type PrayerDetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'PrayersDetail'
>;
type Props = {
  navigation: PrayerDetailScreenNavigationProp;
  route: PrayerDetailScreenRouteProp;
};

export default function PrayerDetailScreen({ navigation, route }: Props) {
  const { prayerId } = route.params;
  const data = useSelector(selectors.prayers.seletPrayerById(prayerId));

  function lefttBtn() {
    return (
      <Pressable onPress={() => navigation.goBack()}>
        <ArrowBackIcon />
      </Pressable>
    );
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: lefttBtn,
      headerRight: () => <PrayerIcon fillPath="#fff" />,
    });
  }, [navigation]);
  return (
    <Container>
      <TitleWrap>
        <Title>{data.title}</Title>
      </TitleWrap>
      <LastPrayedWrap>
        <LineIndicator />
        <LastPrayedText>Last prayed 8 min ago</LastPrayedText>
      </LastPrayedWrap>
      <StyledCounterPrayer prayerId={data.id} />
    </Container>
  );
}
const Container = styled.ScrollView``;
const TitleWrap = styled.View`
  background-color: #bfb393;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 23px;
`;
const Title = styled.Text`
  font-size: 17px;
  line-height: 27px;
  color: #ffffff;
`;
const LastPrayedWrap = styled.View`
  padding: 14px 15px;
  display: flex;
  flex-direction: row;
`;
const LastPrayedText = styled.Text`
  font-size: 17px;
  line-height: 20px;
  color: #514d47;
  margin-left: 10px;
`;
const StyledCounterPrayer = styled(CounterPrayer)`
  margin-bottom: 20px;
`;
const SectionTitle = styled.Text`
  font-size: 13px;
  line-height: 15px;
  display: flex;
  align-items: flex-end;
  text-transform: uppercase;
  margin-bottom: 15px;
  color: #72a8bc;
`;
