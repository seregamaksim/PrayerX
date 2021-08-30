import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Animated,
  Dimensions,
  StyleSheet,
  FlatList,
  Pressable,
  ScrollView,
  Button,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { actions, selectors } from '../store/ducks';
import { SwipeListView } from 'react-native-swipe-list-view';
import PrayerItem from '../components/PrayerItem';
import { IPrayer } from '../store/prayers/types';

interface ISwipeData {
  direction: 'left' | 'right';
  isOpen: boolean;
  key: string;
  value: number;
}

interface IPrayersListProps {
  columnId: number;
}
export interface IPrayerItem {
  item: IPrayer;
}
export default function PrayersList(props: IPrayersListProps) {
  const dispatch = useDispatch();
  const columnId = props.columnId;
  const [animationIsRunning, setAnimationIsRunning] = useState(false);
  const dataPrayers = useSelector(
    selectors.prayers.selectPrayersByColumnId(columnId),
  );

  useEffect(() => {
    dispatch({ type: actions.prayers.getPrayers.type });
  }, [dispatch]);

  const onSwipeValueChange = (swipeData: ISwipeData) => {
    const { key, value } = swipeData;
    const transform = new Animated.Value(1);
    if (value < -Dimensions.get('window').width && !animationIsRunning) {
      setAnimationIsRunning(true);
      Animated.timing(transform, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        setAnimationIsRunning(false);
        dispatch({
          type: actions.prayers.deletePrayer.type,
          prayerId: Number(key),
        });
      });
    }
  };
  const renderItem = (data: IPrayerItem) => <PrayerItem item={data} />;

  const renderHiddenItem = () => (
    <RowBack>
      <RwBackBtn>
        <RowBackBtnText>Delete</RowBackBtnText>
      </RwBackBtn>
    </RowBack>
  );

  return (
    // <FlatList data={dataPrayers} renderItem={renderItem} />
    <>
      <SwipeListView
        disableRightSwipe
        data={dataPrayers.filter(item => !item.checked)}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-Dimensions.get('window').width}
        previewRowKey={'0'}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        onSwipeValueChange={onSwipeValueChange}
        useNativeDriver={true}
        keyExtractor={(item: IPrayer) => item.id.toString()}
      />
      <Button onPress={() => console.log('as')} title="click" />
      <SwipeListView
        disableRightSwipe
        data={dataPrayers.filter(item => item.checked)}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-Dimensions.get('window').width}
        previewRowKey={'0'}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        onSwipeValueChange={onSwipeValueChange}
        useNativeDriver={true}
        keyExtractor={(item: IPrayer) => item.id.toString()}
      />
    </>
  );
}

const RowBack = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding-left: 20px;
  background-color: #ac5253;
  height: 68px;
`;
const RwBackBtn = styled.View`
  position: absolute;
  top: 0;
  width: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  background-color: #ac5253;
  right: 0;
`;
const RowBackBtnText = styled.Text`
  color: #fff;
  font-size: 13px;
  line-height: 15px;
`;
