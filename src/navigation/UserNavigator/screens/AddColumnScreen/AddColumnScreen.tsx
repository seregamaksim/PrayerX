import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Form } from 'react-final-form';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import { actions } from '../../../../store/ducks';
import { RootStackParamList } from '../../../../types';
import { IPostColumn } from '../../../../store/columns/types';
import FormInput from '../../../../ui/FormInput';
import FormSendBtn from '../../../../ui/FormSendBtn';
import ArrowBackIcon from '../../../../ui/icons/ArrowBackIcon';
import MainHeader from '../../../../components/MainHeader';

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
    <Root>
      <MainHeader
        title="Add Column"
        leftBtn={
          <HeaderBackBtn onPress={() => navigation.goBack()}>
            <ArrowBackIcon fillPath="#72A8BC" />
          </HeaderBackBtn>
        }
      />
      <Container>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <View>
              <FormInput name="title" placeholder="Column title" />
              <FormInput name="description" placeholder="Column description" />
              <FormSendBtn handleSubmit={handleSubmit} text="Add column" />
            </View>
          )}
        />
      </Container>
    </Root>
  );
}
const Root = styled.View`
  flex: 1;
  background-color: #fff;
`;
const Container = styled.View`
  padding: 15px;
`;
const HeaderBackBtn = styled.Pressable``;
