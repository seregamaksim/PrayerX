import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Button, Image, Pressable, ScrollView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import ColumnsList from '../components/ColumnsList';
import { actions, selectors } from '../store/ducks';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type Props = {
  navigation: HomeScreenNavigationProp;
};
export default function HomeScreen({ navigation }: Props) {
  function homeRightBtn() {
    return (
      <Pressable onPress={() => navigation.navigate('AddColumnModal')}>
        <Image
          style={{
            width: 20,
            height: 20,
          }}
          source={require('../../static/images/plus.png')}
        />
      </Pressable>
    );
  }
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: homeRightBtn,
    });
  }, [navigation]);
  return <ColumnsList />;
}
