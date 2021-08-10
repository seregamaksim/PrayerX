import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Field, Form } from 'react-final-form';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { http } from '../services/http';
import { actions, selectors } from '../store/ducks';
import SignInScreen from './SignInScreen';

export default function SignUpScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  async function onSubmit(values: any) {
    let request = await http.post('/auth/sign-up/', values);
    console.log('request', request.data);
    dispatch(actions.auth.signUp(request.data));
  }

  return (
    <Container>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <View>
            <Field name="email" placeholder="Email">
              {({ input, placeholder }) => {
                return (
                  <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    onChangeText={input.onChange}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    value={input.value}></TextInput>
                );
              }}
            </Field>
            <Field name="name" placeholder="Name">
              {({ input, placeholder }) => {
                return (
                  <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    onChangeText={input.onChange}
                    value={input.value}></TextInput>
                );
              }}
            </Field>
            <Field name="password" placeholder="Password">
              {({ input, placeholder }) => {
                return (
                  <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    onChangeText={input.onChange}
                    value={input.value}></TextInput>
                );
              }}
            </Field>
            <SendBtn onPress={handleSubmit}>
              <SendBtnText>Send</SendBtnText>
            </SendBtn>
          </View>
        )}></Form>
      <LoginLink onPress={() => navigation.navigate('Login')}>
        <LoginLinkText>Login</LoginLinkText>
      </LoginLink>
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    backgroundColor: '#ffffff',
  },
  view: {
    flex: 1,
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'solid',
    marginBottom: 10,
  },
});
