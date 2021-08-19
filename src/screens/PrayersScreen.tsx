import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { selectors } from '../store/ducks';

export default function PrayersScreen() {
  // const { columnId } = route.params;
  // const dataColumn = useSelector(selectors.columns.selectColumnById(columnId));
  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     title: dataColumn.title,
  //   });
  // }, [navigation, dataColumn]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Text>PrayersScreen</Text>
    </ScrollView>
  );
}
