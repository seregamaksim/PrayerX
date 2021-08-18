import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { IColumn } from '../types';

export default function ColumnItem({ data }: { data: IColumn }) {
  const navigation = useNavigation();
  return (
    <Item>
      <StyledLink onPress={() => console.log('click')}>
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
  text-transform: capitalize;
`;
