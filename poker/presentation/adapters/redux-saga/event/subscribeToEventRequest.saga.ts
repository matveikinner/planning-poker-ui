import { put } from 'redux-saga/effects';
import { subscribeToEventInteractor } from '@poker/di/inversify.config';
import { SubscribeToEventRequest } from '../../redux/event/event.types';
import { Event } from '../../../../domain/models';
import { subscribeToEventFailure, subscribeToEventSuccess } from '../../redux/event/event.actions';

export function* subscribeToEventRequestSaga({ payload }: SubscribeToEventRequest) {
  try {
    const event = (yield subscribeToEventInteractor.invoke(payload)) as Event;
    yield put(subscribeToEventSuccess(event));
  } catch (err) {
    yield put(subscribeToEventFailure());
  }
}
