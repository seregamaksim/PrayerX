import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from './AuthNavigator/screens/AuthScreen/AuthScreen';

import { useSelector } from 'react-redux';
import { selectors } from '../store/ducks';
import UserNavigator from './UserNavigator/Navigator';
import AuthNaigator from './AuthNavigator/Navigator';

const Stack = createNativeStackNavigator();

function StackApp() {
  const isToken = useSelector(selectors.auth.selectToken);
  return isToken ? <UserNavigator /> : <AuthNaigator />;
}

export default StackApp;
