import { Player } from './player.model';

export interface Event {
  id: string;
  eventName: string;
  players: Player[];
  points: number[];
  maxPlayers: number;
  room: string;
}
