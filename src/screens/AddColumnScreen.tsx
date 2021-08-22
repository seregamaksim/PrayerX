import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Form } from 'react-final-form';
import { Button, View } from 'react-native';
import { Text } from 'react-native-svg';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import { actions } from '../store/ducks';
import { RootStackParamList } from '../types';
import { IPostColumn } from '../store/columns/types';
import FormInput from '../ui/FormInput';
import FormSendBtn from '../ui/FormSendBtn';

type AddColumnModalScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'AddColumnModal'
>;

type Props = {
  navigation: AddColumnModalScreenNavigationProp;
};

export default function AddColumnScreen({ navigation }: Props) {
  const dispatch = useDispatch();

  function onSubmit(values: IPostColumn): void {
    dispatch({ type: actions.columns.addColumn.type, values });

    navigation.goBack();
  }
  return (
    <Container>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <View>
            <FormInput name="title" placeholder="Column title" />
            <FormInput name="description" placeholder="Column description" />
            <FormSendBtn handleSubmit={handleSubmit} text="Add column" />
          </View>
        )}></Form>
      <Button
        onPress={() => dispatch({ type: actions.auth.signOut })}
        title="Close"
      />
    </Container>
  );
}

const Container = styled.View`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 15px;
  background-color: #fff;
`;
