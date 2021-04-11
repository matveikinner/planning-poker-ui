import { combineReducers } from 'redux';
import eventReducer from './event/event.reducer';
import SubscriberReducer from './subscriber/subscriber.reducer';

export default combineReducers({
  event: eventReducer,
  subscriber: SubscriberReducer,
});
