import React, { useState } from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import { IPrayer } from '../store/prayers/types';
import ShowMoreBtn from './ShowMoreBtn';
import { Dimensions } from 'react-native';
import { IPrayerItem, ISwipeData } from './PrayersList';

interface IShowAnsweredPrayersProps {
  renderItem: (data: IPrayerItem) => JSX.Element;
  renderHiddenItem: () => JSX.Element;
  onSwipeValueChange: (swipeData: ISwipeData) => void;
  dataPrayers: IPrayer[];
}
export default function ShowAnsweredPrayers({
  dataPrayers,
  renderItem,
  renderHiddenItem,
  onSwipeValueChange,
}: IShowAnsweredPrayersProps) {
  const [isShowList, setIsShowList] = useState<boolean>(false);

  return (
    <>
      <ShowMoreBtn setIsShowList={setIsShowList} isShowList={isShowList} />
      {isShowList && (
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
      )}
    </>
  );
}
