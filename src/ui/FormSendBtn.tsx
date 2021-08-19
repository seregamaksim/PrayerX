import React from 'react';
import styled from 'styled-components/native';

interface IFormSendBtn {
  handleSubmit: () => void;
  text: string;
}

export default function FormSendBtn({ handleSubmit, text }: IFormSendBtn) {
  return (
    <SendBtn onPress={handleSubmit}>
      <SendBtnText>{text}</SendBtnText>
    </SendBtn>
  );
}

const SendBtn = styled.Pressable`
  display: flex;
  justify-content: center;
  background-color: #bfb393;
  padding: 8px 15px;
  min-width: 150px;
  border-radius: 15px;
`;
const SendBtnText = styled.Text`
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
`;
