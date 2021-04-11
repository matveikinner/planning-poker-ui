import { inject, injectable } from 'inversify';
import EVENT_TYPES from '../../di/event.types';
import EventRepository from '@poker/domain/interfaces/event/event.repository.interface';
import EventService from './services/event/event.service';
import { CreateEvent, Event, EventSubscriber } from '@poker/domain/models';
import { mapToEvent } from './mappers/event.mapper';

@injectable()
class EventRemoteRepository implements EventRepository {
  @inject(EVENT_TYPES.EventService) private _eventService!: EventService;

  async createEvent(createEvent: CreateEvent): Promise<Event> {
    return this._eventService.createEvent(createEvent).then((response) => mapToEvent(response.data));
  }

  async subscribeToEvent(subscriber: EventSubscriber): Promise<Event> {
    return this._eventService.subscribeToEvent(subscriber).then((response) => mapToEvent(response.data));
  }
}

export default EventRemoteRepository;
