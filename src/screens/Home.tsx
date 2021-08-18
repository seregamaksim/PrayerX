import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import ColumnsList from '../components/ColumnsList';
import { actions, selectors } from '../store/ducks';

export default function Home() {
  return <ColumnsList />;
}
