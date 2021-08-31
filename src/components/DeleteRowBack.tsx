import React from 'react';
import styled from 'styled-components/native';

export default function DeleteRowBack() {
  return (
    <RowBack>
      <RwBackBtn>
        <RowBackBtnText>Delete</RowBackBtnText>
      </RwBackBtn>
    </RowBack>
  );
}

const RowBack = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding-left: 20px;
  background-color: #ac5253;
  height: 68px;
`;
const RwBackBtn = styled.View`
  position: absolute;
  top: 0;
  width: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  background-color: #ac5253;
  right: 0;
`;
const RowBackBtnText = styled.Text`
  color: #fff;
  font-size: 13px;
  line-height: 15px;
`;
