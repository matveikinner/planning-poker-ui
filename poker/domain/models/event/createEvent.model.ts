import { EventSubscriber } from './eventSubscriber.model';

export interface CreateEvent extends EventSubscriber {
  eventName: string;
  points: number[];
  maxPlayers: number;
}
