import { combineReducers } from 'redux';

import * as auth from './auth';
import * as columns from './columns';
import * as prayers from './prayers';
import * as comments from './comments';

export const reducer = combineReducers({
  auth: auth.reducer,
  columns: columns.reducer,
  prayers: prayers.reducer,
  comments: comments.reducer,
});

export const actions = {
  auth: auth.actions,
  columns: columns.actions,
  prayers: prayers.actions,
  comments: comments.actions,
};

export const selectors = {
  auth: auth.selectors,
  columns: columns.selectors,
  prayers: prayers.selectors,
  comments: comments.selectors,
};
