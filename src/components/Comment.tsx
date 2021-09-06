import React from 'react';
import styled, { DefaultTheme } from 'styled-components/native';
import Avatar from './Avatar';

interface IComment {
  style?: DefaultTheme;
}

export default function Comment() {
  return (
    <CommentWrap>
      <StyledAvatar width={42} />
      <CommentInfoWrap>
        <CommentInfoTop>
          <CommentAuthor>Anna Barber</CommentAuthor>
          <CommentTime>2 days ago</CommentTime>
        </CommentInfoTop>
        <CommentBody>
          How you doing? How you doing? How you doing? How you doing? How you
          doing?
        </CommentBody>
      </CommentInfoWrap>
    </CommentWrap>
  );
}

const CommentWrap = styled.View`
  padding: 15px 17px;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: #e5e5e5;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;
const StyledAvatar = styled(Avatar)`
  margin-right: 12px;
`;

const CommentInfoWrap = styled.View``;
const CommentInfoTop = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2px;
`;
const CommentAuthor = styled.Text`
  font-size: 17px;
  line-height: 20px;
  color: #514d47;
  margin-right: 6px;
`;
const CommentTime = styled.Text`
  font-size: 13px;
  line-height: 16px;
  color: #9c9c9c;
`;
const CommentBody = styled.Text`
  font-size: 17px;
  line-height: 20px;
  color: #514d47;
  max-width: 90%;
`;
