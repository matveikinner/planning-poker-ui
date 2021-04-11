import { CreateEvent, Event, EventSubscriber } from '@poker/domain/models';
import {
  CREATE_EVENT_REQUEST,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAILURE,
  UPDATE_EVENT,
  SUBSCRIBE_TO_EVENT_REQUEST,
  SUBSCRIBE_TO_EVENT_SUCCESS,
  SUBSCRIBE_TO_EVENT_FAILURE,
  SET_EVENT_NAME,
  SET_EVENT_POINTS,
  SET_EVENT_MAX_PLAYERS,
} from './event.constants';

export interface EventState extends Event {}

export interface SetEventName {
  type: typeof SET_EVENT_NAME;
  payload: string;
}

export interface SetEventPoints {
  type: typeof SET_EVENT_POINTS;
  payload: number[];
}

export interface SetEventMaxPlayers {
  type: typeof SET_EVENT_MAX_PLAYERS;
  payload: number;
}

export interface CreateEventRequest {
  type: typeof CREATE_EVENT_REQUEST;
  payload: CreateEvent;
}

export interface CreateEventSuccess {
  type: typeof CREATE_EVENT_SUCCESS;
  payload: Event;
}

export interface CreateEventFailure {
  type: typeof CREATE_EVENT_FAILURE;
}

export interface UpdateEvent {
  type: typeof UPDATE_EVENT;
  payload: Partial<Event>;
}

export interface SubscribeToEventRequest {
  type: typeof SUBSCRIBE_TO_EVENT_REQUEST;
  payload: EventSubscriber;
}

export interface SubscribeToEventSuccess {
  type: typeof SUBSCRIBE_TO_EVENT_SUCCESS;
  payload: Event;
}

export interface SubscribeToEventFailure {
  type: typeof SUBSCRIBE_TO_EVENT_FAILURE;
}

export type EventActionTypes =
  | SetEventName
  | SetEventPoints
  | SetEventMaxPlayers
  | CreateEventRequest
  | CreateEventSuccess
  | CreateEventFailure
  | UpdateEvent
  | SubscribeToEventRequest
  | SubscribeToEventSuccess
  | SubscribeToEventFailure;
