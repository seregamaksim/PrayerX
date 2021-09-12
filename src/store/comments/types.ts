export interface IComment {
  id: number;
  body: string;
  created: string;
  prayerId: number;
  userId: number;
}

export interface IInitialState {
  data: IComment[];
  fetchStatus: string;
}

export interface IAddComment {
  values: {
    body: string;
  };
  prayerId: number;
}
