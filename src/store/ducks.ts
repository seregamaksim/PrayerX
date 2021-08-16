import { combineReducers } from 'redux';

import * as auth from './auth';
import * as columns from './columns';

export const reducer = combineReducers({
  auth: auth.reducer,
  columns: columns.reducer,
});

export const actions = {
  auth: auth.actions,
  columns: columns.actions,
};

export const selectors = {
  auth: auth.selectors,
  columns: columns.selectors,
};
