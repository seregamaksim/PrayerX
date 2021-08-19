import React, { useLayoutEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { selectors } from '../store/ducks';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PrayersScreen from './PrayersScreen';
import SubscribedScreen from './SubscribedScreen';

const Tab = createMaterialTopTabNavigator();
const SubscribedTab = (props: { focused: boolean; color: string }) => {
  console.log('props', props);

  return;
  // <TouchableOpacity
  //         accessibilityRole="button"
  //         accessibilityState={isFocused ? { selected: true } : {}}
  //         accessibilityLabel={options.tabBarAccessibilityLabel}
  //         testID={options.tabBarTestID}
  //         onPress={onPress}
  //         onLongPress={onLongPress}
  //         style={{ flex: 1 }}
  //       >
  //         <Animated.Text style={{ opacity }}>
  //           {label}
  //         </Animated.Text>
  //       </TouchableOpacity>
  // <View
  //   style={{
  //     flex: 1,
  //     flexDirection: 'row',
  //     alignItems: 'center',
  //   }}>
  //   <Text> Subscribed 3</Text>
  // </View>
};

export default function ColumnScreen({ navigation, route }: any) {
  const { columnId } = route.params;
  const dataColumn = useSelector(selectors.columns.selectColumnById(columnId));
  useLayoutEffect(() => {
    navigation.setOptions({
      title: dataColumn.title,
    });
  }, [navigation, dataColumn]);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 13, fontWeight: '600' },
        tabBarActiveTintColor: '#72A8BC',
        tabBarInactiveTintColor: '#C8C8C8',
        tabBarIndicatorStyle: { backgroundColor: '#72A8BC' },
      }}>
      <Tab.Screen
        name="Feed"
        component={PrayersScreen}
        options={{ tabBarLabel: 'My prayers' }}
      />
      <Tab.Screen
        name="Notifications"
        component={SubscribedScreen}
        options={{
          tabBarLabel: 'Subscribed',
        }}
      />
    </Tab.Navigator>
  );
}
