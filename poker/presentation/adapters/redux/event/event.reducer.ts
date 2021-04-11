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
import { EventActionTypes, EventState } from './event.types';

const initialState: EventState = <EventState>{};

const eventReducer = (state = initialState, action: EventActionTypes) => {
  switch (action.type) {
    case SET_EVENT_NAME:
      return { ...state, eventName: action.payload };
    case SET_EVENT_POINTS:
      return { ...state, points: action.payload };
    case SET_EVENT_MAX_PLAYERS:
      return { ...state, maxPlayers: action.payload };
    case CREATE_EVENT_REQUEST:
      return state;
    case CREATE_EVENT_SUCCESS:
      return { ...state, ...action.payload };
    case CREATE_EVENT_FAILURE:
      return state;
    case UPDATE_EVENT:
      return { ...state, ...action.payload };
    case SUBSCRIBE_TO_EVENT_REQUEST:
      return state;
    case SUBSCRIBE_TO_EVENT_SUCCESS:
      return { ...state, ...action.payload };
    case SUBSCRIBE_TO_EVENT_FAILURE:
      return state;
    default:
      return state;
  }
};

export default eventReducer;
