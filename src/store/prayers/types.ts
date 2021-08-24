export interface IPrayer {
  id: number;
  columnId: number;
  title: string;
  description: string;
  checked: boolean;
  commentsIds: number[];
}
export interface InitialState {
  data: IPrayer[];
  fetchStatus: string;
}
