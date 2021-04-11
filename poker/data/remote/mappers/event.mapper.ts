import { Event } from '@poker/domain/models';
import EventNetwork from '../models/event.network';

export const mapToEvent = (event: EventNetwork.Event): Event => ({
  id: event.id,
  eventName: event.eventName,
  players: event.players,
  points: event.points,
  maxPlayers: event.maxPlayers,
  room: event.room,
});
