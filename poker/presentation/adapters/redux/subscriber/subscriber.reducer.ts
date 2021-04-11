import { SET_SUBSCRIBER_ID, SET_SUBSCRIBER_ROLE, SET_SUBSCRIBER_USERNAME } from './subscriber.constants';
import { SubscriberActionTypes, SubscriberState } from './subscriber.types';

const initialState: SubscriberState = <SubscriberState>{};

const SubscriberReducer = (state = initialState, action: SubscriberActionTypes) => {
  switch (action.type) {
    case SET_SUBSCRIBER_ID:
      return { ...state, id: action.payload };
    case SET_SUBSCRIBER_USERNAME:
      return { ...state, username: action.payload };
    case SET_SUBSCRIBER_ROLE:
      return { ...state, role: action.payload };
    default:
      return state;
  }
};

export default SubscriberReducer;
