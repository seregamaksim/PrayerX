import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import styled from 'styled-components/native';
import { RootStackParamList } from '../types';
import { IColumn } from '../store/columns/types';
import { UserRoutes } from '../navigation/UserNavigator/routes';

type ColumnScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Column'
>;

export default function ColumnItem({ data }: { data: IColumn }) {
  const navigation = useNavigation<ColumnScreenNavigationProp>();
  return (
    <Item>
      <StyledLink
        onPress={() =>
          navigation.navigate(UserRoutes.ColumnScreen, { columnId: data.id })
        }>
        <LinkText>{data.title}</LinkText>
      </StyledLink>
    </Item>
  );
}

const Item = styled.View`
  border-width: 1px;
  border-color: #e5e5e5;
  border-style: solid;
  border-radius: 4px;
  margin-bottom: 10px;
`;
const StyledLink = styled.Pressable`
  display: flex;
  padding: 20px 15px;
`;

const LinkText = styled.Text`
  font-size: 17px;
  line-height: 20px;
  color: #514d47;
  font-weight: 600;
  text-transform: capitalize;
`;
