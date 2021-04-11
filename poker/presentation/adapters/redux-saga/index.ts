import { all, takeLatest } from 'redux-saga/effects';
import { CREATE_EVENT_REQUEST } from '../redux/event/event.constants';
import { createEventRequestSaga } from './event/createEventRequest.saga';

export default function* root() {
  yield all([takeLatest(CREATE_EVENT_REQUEST, createEventRequestSaga)]);
}
