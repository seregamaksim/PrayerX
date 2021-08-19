import React from 'react';
import { ScrollView, View, Text } from 'react-native';

export default function ColumnScreen({ route }: any) {
  const { columnId } = route.params;
  console.log('columnId', columnId);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{columnId}</Text>
    </View>
  );
}
