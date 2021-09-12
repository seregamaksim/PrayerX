import moment from 'moment';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { DefaultTheme } from 'styled-components/native';
import { IComment } from '../store/comments/types';
import { actions, selectors } from '../store/ducks';
import TrashIcon from '../ui/icons/TrashIcon';
import Avatar from './Avatar';

interface ICommentProps {
  data: IComment;
  style?: DefaultTheme;
}

export default function Comment(props: ICommentProps) {
  const dispatch = useDispatch();
  const [dataComment, setDataComment] = useState(props.data);
  const nameUser = useSelector(selectors.auth.getName);
  const dateCreated = moment(dataComment.created, 'YYYYMMDD').fromNow();

  function deleteComment() {
    dispatch({
      type: actions.comments.deleteComment.type,
      commentId: dataComment.id,
    });
  }
  return (
    <CommentWrap>
      <StyledAvatar width={42} name={nameUser} />
      <CommentInfoWrap>
        <CommentInfoTop>
          <CommentAuthor>{nameUser}</CommentAuthor>
          <CommentTime>{dateCreated}</CommentTime>
        </CommentInfoTop>
        <CommentBody>{dataComment.body}</CommentBody>
      </CommentInfoWrap>
      <CommentDeleteBtn onPress={deleteComment}>
        <TrashIcon width={20} height={20} />
      </CommentDeleteBtn>
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

  position: relative;
`;
const StyledAvatar = styled(Avatar)`
  margin-right: 12px;
`;

const CommentInfoWrap = styled.View`
  display: flex;
  flex-grow: 1;
`;
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
`;
const CommentDeleteBtn = styled.Pressable`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 20px;
  height: 20px;
`;
