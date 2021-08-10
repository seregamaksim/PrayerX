import { AnyAction, Dispatch } from 'redux';
import { REHYDRATE } from 'redux-persist';
import { http } from '../../services/http';

import { actions } from '../ducks';

export const authMiddleware =
  () =>
  (next: Dispatch) =>
  (action: AnyAction): AnyAction => {
    console.log('action', action);

    if (action.type === actions.auth.signIn.type) {
      action.payload?.token &&
        http.setAuthorizationHeader(action.payload.token);
    }

    if (action.type === REHYDRATE) {
      action.payload?.auth?.token &&
        http.setAuthorizationHeader(action.payload.auth.token);
      console.log('REHYDRATE', http.axios.defaults);
    }

    if (action.type === actions.auth.signOut.type) {
      http.unsetAuthorizationHeader();
    }

    return next(action);
  };
