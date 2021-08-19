import React from 'react';
import { Form } from 'react-final-form';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { actions } from '../store/ducks';
import { IAuth } from '../types';
import FormInput from '../ui/FormInput';
import FormSendBtn from '../ui/FormSendBtn';

export default function LoginForm() {
  const dispatch = useDispatch();

  function onSubmit(values: IAuth): void {
    dispatch({ type: actions.auth.signInRequest.type, values });
  }

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <View>
          <FormInput name="email" placeholder="Email" />
          <FormInput name="password" placeholder="Password" />
          <FormSendBtn handleSubmit={handleSubmit} text="Login" />
        </View>
      )}></Form>
  );
}
