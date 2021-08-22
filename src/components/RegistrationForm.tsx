import React from 'react';
import { Form } from 'react-final-form';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { actions } from '../store/ducks';
import { IRegistrationVal } from '../store/auth/types';
import FormInput from '../ui/FormInput';
import FormSendBtn from '../ui/FormSendBtn';

export default function RegistrationForm() {
  const dispatch = useDispatch();

  function onSubmit(values: IRegistrationVal) {
    dispatch({ type: actions.auth.signUp.type, values });
  }

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <View>
          <FormInput
            name="email"
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <FormInput name="name" placeholder="Name" />
          <FormInput name="password" placeholder="Password" />
          <FormSendBtn handleSubmit={handleSubmit} text="Registration" />
        </View>
      )}></Form>
  );
}
