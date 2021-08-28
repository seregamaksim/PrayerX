import React, { useLayoutEffect } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Image,
} from 'react-native';
import { useSelector } from 'react-redux';
import { selectors } from '../store/ducks';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PrayersScreen from './PrayersScreen';
import SubscribedScreen from './SubscribedScreen';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import GearIcon from '../ui/icons/GearIcon';

type ColumnScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Column'
>;

type ColumnScreenRouteProp = RouteProp<RootStackParamList, 'Column'>;
type Props = {
  navigation: ColumnScreenNavigationProp;
  route: ColumnScreenRouteProp;
};

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

export default function ColumnScreen({ navigation, route }: Props) {
  const { columnId } = route.params;
  const dataColumn = useSelector(selectors.columns.selectColumnById(columnId));
  function columnRightBtn() {
    return (
      <Pressable
        onPress={() =>
          navigation.navigate('SettingsColumn', { columnId: columnId })
        }>
        <GearIcon />
      </Pressable>
    );
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      title: dataColumn.title,
      headerRight: columnRightBtn,
    });
  }, [navigation, dataColumn]);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 13, fontWeight: '600' },
        tabBarActiveTintColor: '#72A8BC',
        tabBarInactiveTintColor: '#C8C8C8',
        tabBarIndicatorStyle: { backgroundColor: '#72A8BC' },
        swipeEnabled: false,
      }}>
      <Tab.Screen
        name="Feed"
        component={PrayersScreen}
        options={{ tabBarLabel: 'My prayers' }}
        initialParams={{ columnId: columnId }}
      />
      <Tab.Screen
        name="Notifications"
        component={SubscribedScreen}
        options={{
          tabBarLabel: 'Subscribed',
        }}
        initialParams={{ columnId: columnId }}
      />
    </Tab.Navigator>
  );
}
