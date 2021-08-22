import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  AddColumnModal: undefined;
  Column: { columnId: number };
  SettingsColumn: { columnId: number };
};
