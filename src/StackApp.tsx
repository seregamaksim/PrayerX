import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from './screens/AuthScreen';
import SignInScreen from './screens/SignInScreen';
import { useSelector } from 'react-redux';
import { selectors } from './store/ducks';
import Home from './screens/Home';

const Stack = createNativeStackNavigator();

const StackApp = () => {
  const isToken = useSelector(selectors.auth.selectToken);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isToken.length > 0 ? (
          <>
            <Stack.Screen name="My desk" component={Home} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Registration"
              component={AuthScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Login" component={SignInScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackApp;
