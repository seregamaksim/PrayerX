import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { FlatList, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { actions, selectors } from '../store/ducks';
import { IColumn } from '../store/columns/types';
import ColumnItem from './ColumnItem';

export default function ColumnsList() {
  const dispatch = useDispatch();
  const columns = useSelector(selectors.columns.selectColumns);
  const navigation = useNavigation();
  console.log('columns', columns);

  useEffect(() => {
    dispatch({ type: actions.columns.getColumns.type });
  }, [dispatch]);

  const renderItem = ({ item }: { item: IColumn }) => {
    return <ColumnItem data={item} />;
  };
  return (
    // <Text>sa</Text>
    <StyledHomeView
      data={columns}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  );
}

const StyledHomeView = styled.FlatList`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 15px;
` as unknown as typeof FlatList;
