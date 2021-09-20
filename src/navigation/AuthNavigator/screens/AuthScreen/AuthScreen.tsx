import React, { useState } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import LoginForm from '../../../../components/LoginForm';
import RegistrationForm from '../../../../components/RegistrationForm';

export default function AuthScreen() {
  const [isRegistation, setIsRegistration] = useState(false);

  return (
    <Container>
      <ChangeTabsWrap>
        <ChangeTab
          isActive={!isRegistation}
          onPress={() => setIsRegistration(false)}>
          <Text>Login</Text>
        </ChangeTab>
        <ChangeTab
          isActive={isRegistation}
          onPress={() => setIsRegistration(true)}>
          <Text>Registration</Text>
        </ChangeTab>
      </ChangeTabsWrap>
      {isRegistation ? <RegistrationForm /> : <LoginForm />}
    </Container>
  );
}

const Container = styled.View`
  display: flex;
  height: 100%;
  justify-content: center;
  background-color: #fff;
  padding: 10px;
`;
const ChangeTabsWrap = styled.View`
  padding: 3px;
  background-color: #eee;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const ChangeTab = styled.Pressable<{ isActive: boolean }>`
  display: flex;
  padding: 7px 10px;
  flex-direction: row;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  background-color: ${props => (props.isActive ? '#68d9ff' : 'transparent')};
`;
