import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

interface IAvatarProps {
  width: number;
}

export default function Avatar({ width }: IAvatarProps) {
  return <AvatarWrap width={width}></AvatarWrap>;
}

const AvatarWrap = styled.View<{ width: number }>`
  width: ${props => (props.width ? props.width : 32)}px;
  height: ${props => (props.width ? props.width : 32)}px;
  border-radius: 100px;
  background-color: #ccc;
`;
