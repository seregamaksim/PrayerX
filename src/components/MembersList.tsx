import React from 'react';
import styled from 'styled-components/native';
import Avatar from './Avatar';

export default function MembersList() {
  return (
    <List>
      <AvatarItem width={32} />
      <AvatarItem width={32} />
    </List>
  );
}

const List = styled.View`
  display: flex;
  flex-direction: row;
`;
const AvatarItem = styled(Avatar)`
  margin-right: 8px;
`;
