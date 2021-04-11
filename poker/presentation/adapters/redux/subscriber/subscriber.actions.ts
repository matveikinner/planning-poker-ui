import { SET_SUBSCRIBER_ID, SET_SUBSCRIBER_ROLE, SET_SUBSCRIBER_USERNAME } from './subscriber.constants';

export const SetSubscriberId = (payload: string) => ({
  type: SET_SUBSCRIBER_ID,
  payload,
});

export const SetSubscriberUsername = (payload: string) => ({
  type: SET_SUBSCRIBER_USERNAME,
  payload,
});

export const SetSubscriberRole = (payload: string) => ({
  type: SET_SUBSCRIBER_ROLE,
  payload,
});
