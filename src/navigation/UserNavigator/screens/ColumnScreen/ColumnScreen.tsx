import React, { useLayoutEffect } from 'react';
import { Platform, Pressable, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { selectors } from '../../../../store/ducks';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PrayersScreen from '../PrayersScreen';
import SubscribedScreen from '../SubscribedScreen';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../types';
import GearIcon from '../../../../ui/icons/GearIcon';
import SubscribedTabItem from '../../../../components/SubscribedTabItem';
import { UserRoutes } from '../../routes';
import styled from 'styled-components/native';
import ArrowBackIcon from '../../../../ui/icons/ArrowBackIcon';
import MainHeader from '../../../../components/MainHeader';

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

export default function ColumnScreen({ navigation, route }: Props) {
  const { columnId } = route.params;
  const dataColumn = useSelector(selectors.columns.selectColumnById(columnId));
  const prayers = useSelector(
    selectors.prayers.selectPrayersByColumnId(columnId),
  );
  return (
    <Root>
      <Header
        leftBtn={
          <HeaderBackBtn onPress={() => navigation.goBack()}>
            <ArrowBackIcon fillPath="#72A8BC" />
          </HeaderBackBtn>
        }
        rightBtn={
          <HeaderSettingsColumnBtn
            onPress={() =>
              navigation.navigate(UserRoutes.ColumnSettingsScreen, {
                columnId: columnId,
              })
            }>
            <GearIcon />
          </HeaderSettingsColumnBtn>
        }
        title={dataColumn.title}
      />
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
            tabBarLabel: ({ color }) => (
              <SubscribedTabItem color={color} prayerLength={prayers.length} />
            ),
            tabBarStyle: { position: 'relative' },
            tabBarLabelStyle: { position: 'relative' },
          }}
          initialParams={{ columnId: columnId }}
        />
      </Tab.Navigator>
    </Root>
  );
}
const Root = styled.View`
  flex: 1;
  background-color: #fff;
  padding-top: ${Platform.OS === 'ios' ? '50px' : '0'};
`;
const Header = styled(MainHeader)`
  border-bottom-width: 0;
`;
const HeaderBackBtn = styled.Pressable``;
const HeaderSettingsColumnBtn = styled.Pressable``;
