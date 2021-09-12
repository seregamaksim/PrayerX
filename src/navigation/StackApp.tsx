import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from '../screens/AuthScreen';

import { useSelector } from 'react-redux';
import { selectors } from '../store/ducks';
import HomeScreen from '../screens/HomeScreen';
import AddColumnScreen from '../screens/AddColumnScreen';
import ColumnScreen from '../screens/ColumnScreen';
import ColumnSettingsScreen from '../screens/ColumnSettingsScreen';
import PrayerDetailScreen from '../screens/PrayerDetailScreen';

const Stack = createNativeStackNavigator();

function StackApp() {
  const isToken = useSelector(selectors.auth.selectToken);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            fontWeight: '600',
            fontSize: 17,
            color: '#514D47',
          },
        }}>
        {isToken ? (
          <>
            <Stack.Group>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'My desk' }}
              />
              <Stack.Screen
                name="Column"
                component={ColumnScreen}
                options={{ title: 'My Columns', headerShadowVisible: false }}
              />
              <Stack.Screen
                name="PrayersDetail"
                component={PrayerDetailScreen}
                options={{
                  title: '',
                  headerStyle: { backgroundColor: '#BFB393' },
                  headerShadowVisible: false,
                }}
              />
            </Stack.Group>
            <Stack.Group>
              <Stack.Screen
                name="AddColumnModal"
                component={AddColumnScreen}
                options={{ title: 'Add column', presentation: 'modal' }}
              />
              <Stack.Screen
                name="SettingsColumn"
                component={ColumnSettingsScreen}
                options={{ title: 'Settings column' }}
              />
            </Stack.Group>
          </>
        ) : (
          <>
            <Stack.Screen
              name="Registration"
              component={AuthScreen}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackApp;
