import React from 'react';
import styled from 'styled-components/native';
import PrayersList from '../components/PrayersList';
import { RootStackParamList } from '../types';
import { RouteProp } from '@react-navigation/native';

type PrayersScreenRouteProp = RouteProp<RootStackParamList, 'Prayers'>;

type Props = {
  route: PrayersScreenRouteProp;
};
export default function PrayersScreen({ route }: Props) {
  const { columnId } = route.params;

  return (
    <Container>
      <PrayersList columnId={columnId} />
    </Container>
  );
}

const Container = styled.View`
  height: 100%;
  display: flex;
  background-color: #fff;
`;
