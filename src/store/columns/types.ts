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
export interface IUpdateColumn {
  values: IPostColumn;
  columnId: number;
}
export interface InitialState {
  data: IColumn[];
  fetchStatus: string;
}
