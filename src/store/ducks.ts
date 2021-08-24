import { combineReducers } from 'redux';

import * as auth from './auth';
import * as columns from './columns';
import * as prayers from './prayers';

export const reducer = combineReducers({
  auth: auth.reducer,
  columns: columns.reducer,
  prayers: prayers.reducer,
});

export const actions = {
  auth: auth.actions,
  columns: columns.actions,
  prayers: prayers.actions,
};

export const selectors = {
  auth: auth.selectors,
  columns: columns.selectors,
  prayers: prayers.selectors,
};
