import { IColumn } from '../columns/types';

export interface IAuthSlice {
  token: string;
  name: string;
  email: string;
  fetchStatus: string;
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
  columns: IColumn[];
}
