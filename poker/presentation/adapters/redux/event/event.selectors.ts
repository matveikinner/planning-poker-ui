import { RootState } from '@core/presentation/frameworks/redux.config';
import { EventState } from './event.types';

export const selectEventName = (state: RootState): string => state.poker.event.eventName;
export const selectEventPoints = (state: RootState): number[] => state.poker.event.points;
export const selectEventMaxPlayers = (state: RootState): number => state.poker.event.maxPlayers;
export const selectEvent = (state: RootState): EventState => state.poker.event;
