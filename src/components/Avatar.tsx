import React from 'react';
import { StyleSheetProperties, Text, View } from 'react-native';
import { Styles } from 'react-native-svg';
import styled, { DefaultTheme } from 'styled-components/native';

interface IAvatarProps {
  width: number;
  style?: DefaultTheme;
}

export default function Avatar({ width, style }: IAvatarProps) {
  return <AvatarWrap style={style} width={width}></AvatarWrap>;
}

const AvatarWrap = styled.View<{ width: number }>`
  width: ${props => (props.width ? props.width : 32)}px;
  height: ${props => (props.width ? props.width : 32)}px;
  border-radius: 100px;
  background-color: #ccc;
`;
