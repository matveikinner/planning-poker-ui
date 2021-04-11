import { put, select } from 'redux-saga/effects';
import { createEventFailure, createEventSuccess } from '../../redux/event/event.actions';
import { CreateEventRequest } from '../../redux/event/event.types';
import { Event } from '../../../../domain/models';
import { createEventInteractor } from '@poker/di/inversify.config';
import { selectSubscriber } from '../../redux/subscriber/subscriber.selectors';
import { SubscriberState } from '../../redux/subscriber/subscriber.types';
import { selectEventMaxPlayers, selectEventName, selectEventPoints } from '../../redux/event/event.selectors';

export function* createEventRequestSaga() {
  const eventSubscriber = (yield select(selectSubscriber)) as SubscriberState;
  const eventName = (yield select(selectEventName)) as string;
  const eventPoints = (yield select(selectEventPoints)) as number[];
  const eventMaxPlayers = (yield select(selectEventMaxPlayers)) as number;

  try {
    const event = (yield createEventInteractor.invoke({
      ...eventSubscriber,
      eventName,
      points: eventPoints,
      maxPlayers: eventMaxPlayers,
    })) as Event;
    yield put(createEventSuccess(event));
  } catch (err) {
    console.log(err);
    yield put(createEventFailure());
  }
}
