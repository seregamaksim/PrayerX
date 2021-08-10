import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';
import { useSelector } from 'react-redux';
import { selectors } from './store/ducks';
import Home from './screens/Home';

const Stack = createNativeStackNavigator();

const StackApp = () => {
  const isToken = useSelector(selectors.auth.selectToken);
  console.log('isToken', isToken);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isToken.length ? (
          <>
            <Stack.Screen name="Home" component={Home} />
          </>
        ) : (
          <>
            <Stack.Screen name="Registration" component={SignUpScreen} />
            <Stack.Screen name="Login" component={SignInScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackApp;
