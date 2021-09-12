import { put, takeLatest } from 'redux-saga/effects';
import { http } from '../../services/http';

import { actions } from '../ducks';
import { IAddComment, IComment } from './types';

export interface IAddCommentAction {
  type: typeof actions.comments.addComment.type;
  data: IAddComment;
}

export interface IDeleteColumnAction {
  type: typeof actions.comments.deleteComment.type;
  commentId: number;
}
export function* fetchComments() {
  try {
    const request: { data: IComment[] } = yield http.get('/comments/');
    yield put(actions.comments.getCommentsSuccess(request.data));
  } catch (e) {
    yield put(actions.comments.getCommentsFailed());
    console.log('error', e);
  }
}
export function* addComment({ data }: IAddCommentAction) {
  try {
    const request: { data: IComment } = yield http.post(
      `/prayers/${data.prayerId}/comments`,
      data.values,
    );
    yield put(actions.comments.addCommentSuccess(request.data));
  } catch (e) {
    yield put(actions.comments.addCommentFailed());
    console.log('error', e);
  }
}
export function* deleteComment({ commentId }: IDeleteColumnAction) {
  try {
    const request: { data: IComment } = yield http.delete(
      `/comments/${commentId}`,
    );
    yield put(actions.comments.deleteCommentSuccess(commentId));
  } catch (e) {
    yield put(actions.comments.deleteCommentFailed());
    console.log('error', e);
  }
}

export function* watchFetchComments() {
  yield takeLatest(actions.comments.getComments.type, fetchComments);
}
export function* watchAddComments() {
  yield takeLatest(actions.comments.addComment.type, addComment);
}

export function* watchDeleteComments() {
  yield takeLatest(actions.comments.deleteComment.type, deleteComment);
}
