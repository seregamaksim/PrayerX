import React from 'react';
import { Field, Form } from 'react-final-form';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { useDispatch } from 'react-redux';
import { actions } from '../store/ducks';
import { IRegistrationVal } from '../types';

export default function RegistrationForm() {
  const dispatch = useDispatch();

  function onSubmit(values: IRegistrationVal) {
    dispatch({ type: actions.auth.signUpRequest.type, values });
  }

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <View>
          <Field name="email" placeholder="Email">
            {({ input, placeholder }) => {
              return (
                <StyledTextInput
                  placeholder={placeholder}
                  onChangeText={input.onChange}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  value={input.value}></StyledTextInput>
              );
            }}
          </Field>
          <Field name="name" placeholder="Name">
            {({ input, placeholder }) => {
              return (
                <StyledTextInput
                  placeholder={placeholder}
                  onChangeText={input.onChange}
                  value={input.value}></StyledTextInput>
              );
            }}
          </Field>
          <Field name="password" placeholder="Password">
            {({ input, placeholder }) => {
              return (
                <StyledTextInput
                  placeholder={placeholder}
                  onChangeText={input.onChange}
                  value={input.value}></StyledTextInput>
              );
            }}
          </Field>
          <SendBtn onPress={handleSubmit}>
            <SendBtnText>Registration</SendBtnText>
          </SendBtn>
        </View>
      )}></Form>
  );
}

const SendBtn = styled.Pressable`
  display: flex;
  justify-content: center;
  background-color: #bfb393;
  padding: 10px 15px;
  min-width: 150px;
`;
const SendBtnText = styled.Text`
  color: #ffffff;
  text-align: center;
`;
const StyledTextInput = styled.TextInput`
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
`;
