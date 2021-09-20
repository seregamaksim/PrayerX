import React from 'react';
import { Platform } from 'react-native';
import ColumnsList from '../../../../components/ColumnsList';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../types';
import PlusIcon from '../../../../ui/icons/PlusIcon';
import { UserRoutes } from '../../routes';
import styled from 'styled-components/native';
import MainHeader from '../../../../components/MainHeader';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type Props = {
  navigation: HomeScreenNavigationProp;
};
export default function HomeScreen({ navigation }: Props) {
  return (
    <Root>
      <MainHeader
        title="My Desk"
        rightBtn={
          <HeaderAddColumnBtn
            onPress={() => navigation.navigate(UserRoutes.AddColumnScreen)}>
            <PlusIcon width={20} height={20} />
          </HeaderAddColumnBtn>
        }
      />
      <ColumnsList />
    </Root>
  );
}

const Root = styled.View`
  display: flex;
  height: 100%;
  background: #fff;
  padding-top: ${Platform.OS === 'ios' ? '50px' : '0'};
`;

const HeaderAddColumnBtn = styled.Pressable``;
