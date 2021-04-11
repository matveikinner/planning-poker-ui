import { EventSubscriber } from '@poker/domain/models';
import { SET_SUBSCRIBER_ID, SET_SUBSCRIBER_ROLE, SET_SUBSCRIBER_USERNAME } from './subscriber.constants';

export interface SubscriberState extends EventSubscriber {}

export interface SetSubscriberId {
  type: typeof SET_SUBSCRIBER_ID;
  payload: string;
}

export interface SetSubscribeUsername {
  type: typeof SET_SUBSCRIBER_USERNAME;
  payload: string;
}

export interface SetSubscriberRole {
  type: typeof SET_SUBSCRIBER_ROLE;
  payload: string;
}

export type SubscriberActionTypes = SetSubscriberId | SetSubscribeUsername | SetSubscriberRole;
