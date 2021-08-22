import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useLayoutEffect } from 'react';
import { Form } from 'react-final-form';
import { Image, Pressable, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import { actions } from '../store/ducks';
import { RootStackParamList } from '../types';
import FormInput from '../ui/FormInput';
import FormSendBtn from '../ui/FormSendBtn';
import TrashIcon from '../ui/icons/TrashIcon';

type ColumnSettignsScreennavigationProp = StackNavigationProp<
  RootStackParamList,
  'SettingsColumn'
>;
type ColumnSettignsScreenRouteProp = RouteProp<
  RootStackParamList,
  'SettingsColumn'
>;

type Props = {
  navigation: ColumnSettignsScreennavigationProp;
  route: ColumnSettignsScreenRouteProp;
};

interface ITitleUpdate {
  title: string;
  description: string;
}

export default function ColumnSettingsScreen({ navigation, route }: Props) {
  const dispatch = useDispatch();
  function deleteColumn() {
    dispatch({
      type: actions.columns.deleteColumn.type,
      columnId: route.params.columnId,
    });
    navigation.navigate('Home');
  }

  function rightBtn() {
    return (
      <Pressable onPress={deleteColumn}>
        <TrashIcon width={24} height={24} />
      </Pressable>
    );
  }
  function updateTitle(values: ITitleUpdate) {
    const data = { columnId: route.params.columnId, values };
    dispatch({ type: actions.columns.updateColumn.type, data });
    navigation.goBack();
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: rightBtn,
    });
  }, [navigation]);

  return (
    <Container>
      <Form
        onSubmit={updateTitle}
        render={({ handleSubmit }) => (
          <View>
            <FormInput name="title" placeholder="Title" />
            <FormInput name="description" placeholder="Description" />
            <FormSendBtn
              handleSubmit={handleSubmit}
              text="Update column info"
            />
          </View>
        )}></Form>
    </Container>
  );
}

const Container = styled.View`
  display: flex;
  height: 100%;
  background-color: #fff;
  padding: 15px;
`;
