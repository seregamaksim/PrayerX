import React from 'react';
import styled, { DefaultTheme } from 'styled-components/native';
import UserIcon from '../ui/icons/UserIcon';

interface IAvatarProps {
  width: number;
  name?: string;
  style?: DefaultTheme;
}

export default function Avatar({ width, style, name }: IAvatarProps) {
  const acronym = name
    ?.split(/\s/)
    .reduce((response, word) => (response += word.slice(0, 1)), '');
  return (
    <AvatarWrap style={style} width={width}>
      {acronym ? (
        <StyledName>{acronym}</StyledName>
      ) : (
        <UserIcon width={12} fillPath="#fff" />
      )}
    </AvatarWrap>
  );
}

const AvatarWrap = styled.View<{ width: number }>`
  width: ${props => (props.width ? props.width : 32)}px;
  height: ${props => (props.width ? props.width : 32)}px;
  border-radius: 100px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledName = styled.Text`
  font-size: 14px;
  color: #fff;
  text-transform: uppercase;
`;
