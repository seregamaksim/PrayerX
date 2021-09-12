import React from 'react';
import styled from 'styled-components/native';

interface IShowMoreBtnProps {
  isShowList: boolean;
  setIsShowList: (arg: boolean) => void;
}

export default function ShowMoreBtn({
  isShowList,
  setIsShowList,
}: IShowMoreBtnProps) {
  return (
    <BtnWrap>
      <StyledBtn onPress={() => setIsShowList(!isShowList)}>
        <StyledBtnText>
          {isShowList ? 'Hide' : 'Show'} Answered Prayers
        </StyledBtnText>
      </StyledBtn>
    </BtnWrap>
  );
}

const BtnWrap = styled.View`
  display: flex;
  justify-content: center;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const StyledBtn = styled.Pressable`
  width: auto;
  padding: 8px 17px;
  background: #bfb393;
  box-shadow: 0px 2px 15px rgba(66, 78, 117, 0.1);
  border-radius: 15px;
`;

const StyledBtnText = styled.Text`
  font-size: 12px;
  line-height: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: #ffffff;
  text-align: center;
`;
