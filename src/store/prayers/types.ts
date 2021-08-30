export interface IPrayer {
  id: number;
  columnId: number;
  title: string;
  description: string;
  checked: boolean;
  commentsIds: number[];
  key?: string;
}
export interface InitialState {
  data: IPrayer[];
  fetchStatus: string;
}

export interface IAddPrayer {
  values: IPrayer;
  columnId: number;
}
