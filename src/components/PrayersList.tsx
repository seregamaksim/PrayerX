import React, { useEffect, useState } from 'react';
import { Animated, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { actions, selectors } from '../store/ducks';
import { SwipeListView } from 'react-native-swipe-list-view';
import PrayerItem from '../components/PrayerItem';
import { IPrayer } from '../store/prayers/types';
import AddPrayerInput from './AddPrayerInput';
import DeleteRowBack from './DeleteRowBack';
import ShowAnsweredPrayers from './ShowAnsweredPrayers';

export interface ISwipeData {
  direction: 'left' | 'right';
  isOpen: boolean;
  key: string;
  value: number;
}

interface IPrayersListProps {
  columnId: number;
  withoutInput?: boolean;
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
      }).start(({ finished }) => {
        if (finished) {
          setAnimationIsRunning(false);
          dispatch({
            type: actions.prayers.deletePrayer.type,
            prayerId: Number(key),
          });
        }
      });
    }
  };
  const renderItem = (data: IPrayerItem) => <PrayerItem item={data} />;

  const renderHiddenItem = () => <DeleteRowBack />;

  return (
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
      ListHeaderComponent={
        props.withoutInput ? null : <AddPrayerInput columnId={columnId} />
      }
      ListFooterComponent={
        dataPrayers.filter(item => item.checked).length > 0 ? (
          <ShowAnsweredPrayers
            dataPrayers={dataPrayers}
            onSwipeValueChange={onSwipeValueChange}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}
          />
        ) : null
      }
    />
  );
}
