import { RootState } from '@core/presentation/frameworks/redux.config';
import { SubscriberState } from './subscriber.types';

export const selectSubscriber = (state: RootState): SubscriberState => state.poker.subscriber;
