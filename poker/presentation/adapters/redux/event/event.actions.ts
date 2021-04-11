import { CreateEvent, EventSubscriber, Event } from '@poker/domain/models';
import {
  CREATE_EVENT_FAILURE,
  CREATE_EVENT_REQUEST,
  CREATE_EVENT_SUCCESS,
  SET_EVENT_MAX_PLAYERS,
  SET_EVENT_NAME,
  SET_EVENT_POINTS,
  SUBSCRIBE_TO_EVENT_FAILURE,
  SUBSCRIBE_TO_EVENT_REQUEST,
  SUBSCRIBE_TO_EVENT_SUCCESS,
  UPDATE_EVENT,
} from './event.constants';

export const setEventName = (payload: string) => ({
  type: SET_EVENT_NAME,
  payload,
});

export const setEventPoints = (payload: number[]) => ({
  type: SET_EVENT_POINTS,
  payload,
});

export const setEventMaxPlayers = (payload: number) => ({
  type: SET_EVENT_MAX_PLAYERS,
  payload,
});

export const createEventRequest = () => ({
  type: CREATE_EVENT_REQUEST,
});

export const createEventSuccess = (payload: Event) => ({
  type: CREATE_EVENT_SUCCESS,
  payload,
});

export const createEventFailure = () => ({
  type: CREATE_EVENT_FAILURE,
});

export const updateEvent = (payload: Partial<Event>) => ({
  type: UPDATE_EVENT,
  payload,
});

export const subscribeToEventRequest = (payload: EventSubscriber) => ({
  type: SUBSCRIBE_TO_EVENT_REQUEST,
  payload,
});

export const subscribeToEventSuccess = (payload: Event) => ({
  type: SUBSCRIBE_TO_EVENT_SUCCESS,
  payload,
});

export const subscribeToEventFailure = () => ({
  type: SUBSCRIBE_TO_EVENT_FAILURE,
});
