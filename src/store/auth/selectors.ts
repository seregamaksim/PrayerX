import { RootState } from '../store';

export const selectToken = (state: RootState) => state.auth.token;
export const getName = (state: RootState) => state.auth.name;
