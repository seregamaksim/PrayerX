import React from 'react';
import { Pressable } from 'react-native';
import ColumnsList from '../components/ColumnsList';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import PlusIcon from '../ui/icons/PlusIcon';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type Props = {
  navigation: HomeScreenNavigationProp;
};
export default function HomeScreen({ navigation }: Props) {
  function homeRightBtn() {
    return (
      <Pressable onPress={() => navigation.navigate('AddColumnModal')}>
        <PlusIcon width={20} height={20} />
      </Pressable>
    );
  }
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: homeRightBtn,
    });
  }, [navigation]);

  return <ColumnsList />;
}
