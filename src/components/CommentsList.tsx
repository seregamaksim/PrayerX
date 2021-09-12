import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { IComment } from '../store/comments/types';
import { selectors } from '../store/ducks';
import Comment from './Comment';

interface ICommentsListProps {
  prayerId: number;
}

export default function CommentsList({ prayerId }: ICommentsListProps) {
  const commentsList = useSelector(
    selectors.comments.getCommentsByPrayerId(prayerId),
  );
  const renderItem = ({ item }: { item: IComment }) => {
    return <Comment data={item} />;
  };
  return (
    <StyledCommentsList
      data={commentsList}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  );
}

const StyledCommentsList = styled.FlatList`
  border-top-width: 1px;
  border-style: solid;
  border-color: #e5e5e5;
` as unknown as typeof FlatList;
