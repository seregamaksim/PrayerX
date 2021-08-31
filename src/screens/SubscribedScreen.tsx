import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import PrayersList from '../components/PrayersList';
import { RootStackParamList } from '../types';

type SubscribedScreenRouteProp = RouteProp<
  RootStackParamList,
  'ColumnSubscribed'
>;
type Props = {
  route: SubscribedScreenRouteProp;
};

export default function SubscribedScreen({ route }: Props) {
  const { columnId } = route.params;
  return (
    <Container>
      <PrayersList columnId={columnId} withoutInput={true} />
    </Container>
  );
}

const Container = styled.View`
  height: 100%;
  display: flex;
  background-color: #fff;
`;
