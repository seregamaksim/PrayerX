import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from './screens/AuthScreen';
import SignInScreen from './screens/SignInScreen';
import { useSelector } from 'react-redux';
import { selectors } from './store/ducks';
import Home from './screens/Home';
import { Button, Image, Pressable } from 'react-native';

const Stack = createNativeStackNavigator();

const StackApp = () => {
  const isToken = useSelector(selectors.auth.selectToken);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isToken ? (
          <>
            <Stack.Screen
              name="My desk"
              component={Home}
              options={{
                headerRight: () => (
                  <Pressable onPress={() => console.log('This is a button!')}>
                    <Image
                      style={{
                        width: 20,
                        height: 20,
                      }}
                      source={require('../static/images/plus.png')}
                    />
                  </Pressable>
                ),
              }}
            />
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
