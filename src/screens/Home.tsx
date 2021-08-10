import React from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { actions } from '../store/ducks';

export default function Home() {
  const dispatch = useDispatch();
  return (
    <View>
      <Text>Home</Text>
      <Button onPress={() => dispatch(actions.auth.signOut())} title="Click">
        {' '}
      </Button>
    </View>
  );
}
