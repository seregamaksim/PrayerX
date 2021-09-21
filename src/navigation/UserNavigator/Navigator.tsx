import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { UserRoutes } from './routes';
import HomeScreen from './screens/HomeScreen';
import ColumnScreen from './screens/ColumnScreen';
import PrayerDetailScreen from './screens/PrayerDetailScreen';
import AddColumnScreen from './screens/AddColumnScreen';
import ColumnSettingsScreen from './screens/ColumnSettingsScreen';

const Stack = createStackNavigator();

export default function UserNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={UserRoutes.HomeScreen} component={HomeScreen} />
        <Stack.Screen
          name={UserRoutes.ColumnScreen}
          component={ColumnScreen}
          options={{
            title: 'My Columns',
            //  headerShadowVisible: false
          }}
        />
        <Stack.Screen
          name={UserRoutes.PrayerDetailScreen}
          component={PrayerDetailScreen}
          options={{
            title: '',
            headerStyle: { backgroundColor: '#BFB393' },
            // headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name={UserRoutes.AddColumnScreen}
          component={AddColumnScreen}
          options={{ title: 'Add column', presentation: 'modal' }}
        />
        <Stack.Screen
          name={UserRoutes.ColumnSettingsScreen}
          component={ColumnSettingsScreen}
          options={{ title: 'Settings column' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
