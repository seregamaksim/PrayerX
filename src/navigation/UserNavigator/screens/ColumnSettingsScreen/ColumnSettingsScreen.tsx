import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Form } from 'react-final-form';
import { Platform, View } from 'react-native';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import MainHeader from '../../../../components/MainHeader';
import { actions } from '../../../../store/ducks';
import { RootStackParamList } from '../../../../types';
import FormInput from '../../../../ui/FormInput';
import FormSendBtn from '../../../../ui/FormSendBtn';
import ArrowBackIcon from '../../../../ui/icons/ArrowBackIcon';
import TrashIcon from '../../../../ui/icons/TrashIcon';
import { UserRoutes } from '../../routes';

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
    navigation.navigate(UserRoutes.HomeScreen);
  }

  function updateTitle(values: ITitleUpdate) {
    const data = { columnId: route.params.columnId, values };
    dispatch({ type: actions.columns.updateColumn.type, data });
    navigation.goBack();
  }
  return (
    <Root>
      <MainHeader
        title="Column Settings"
        leftBtn={
          <HeaderBackBtn onPress={() => navigation.goBack()}>
            <ArrowBackIcon fillPath="#72A8BC" />
          </HeaderBackBtn>
        }
        rightBtn={
          <HeaderDeleteColumnBtn onPress={deleteColumn}>
            <TrashIcon width={24} height={24} />
          </HeaderDeleteColumnBtn>
        }
      />

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
          )}
        />
      </Container>
    </Root>
  );
}
const Root = styled.View`
  flex: 1;
  background-color: #fff;
  padding-top: ${Platform.OS === 'ios' ? '50px' : '0'};
`;
const Container = styled.View`
  display: flex;
  height: 100%;
  background-color: #fff;
  padding: 15px;
`;
const HeaderBackBtn = styled.Pressable``;
const HeaderDeleteColumnBtn = styled.Pressable``;
