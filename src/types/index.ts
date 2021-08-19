import { StackNavigationProp } from '@react-navigation/stack';

export interface IAuthSlice {
  token: string;
  name: string;
  email: string;
}
export interface IAuth {
  name: string;
  email: string;
}
export interface IRegistrationVal extends IAuth {
  password: string;
}

export interface ILoginResponse extends IAuth {
  id: number;
  token: string;
}
export interface IRegistrationResponse extends IAuth {
  id: number;
  token: string;
  password: string;
}

export interface IColumn {
  id: number;
  userId: number;
  title: string;
  description: string;
}

export interface IPostColumn {
  title: string;
  description: string;
}
export type RootStackParamList = {
  Home: undefined;
  AddColumnModal: undefined;
  Column: { columnId: number };
};
