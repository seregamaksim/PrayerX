import React from 'react';
import { Field, Form } from 'react-final-form';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { http } from '../services/http';
import { actions } from '../store/ducks';

export default function LoginForm() {
  const dispatch = useDispatch();

  async function onSubmit(values: any) {
    let request = await http.post('/auth/sign-in/', values);
    console.log('request', request.data);
    dispatch(actions.auth.signUp(request.data));
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
            <SendBtnText>Login</SendBtnText>
          </SendBtn>
        </View>
      )}></Form>
  );
}

const Container = styled.View`
  display: flex;
  height: 100%;
  justify-content: center;
  background-color: #fff;
  padding: 10px;
`;
const LoginLink = styled.Pressable`
  margin-top: 10px;
`;
const LoginLinkText = styled.Text`
  font-size: 12px;
  color: #7da9d3;
`;
const SendBtn = styled.Pressable`
  display: flex;
  justify-content: center;
  /* align-self: flex-end; */
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
