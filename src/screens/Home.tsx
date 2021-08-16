import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { http } from '../services/http';
import { actions, selectors } from '../store/ducks';

export default function Home({ navigation }: any) {
  const dispatch = useDispatch();
  const columns = useSelector(selectors.columns.selectColumns);

  useEffect(() => {
    dispatch({ type: actions.columns.getColumns.type });
  }, [dispatch]);

  return columns.map(item => {
    return <Text key={item.id}>{item.title}</Text>;
  });
}
