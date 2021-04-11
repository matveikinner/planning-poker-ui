import { inject, injectable } from 'inversify';
import EVENT_TYPES from '../di/event.types';
import EventRepository from '@poker/domain/interfaces/event/event.repository.interface';
import { CreateEvent, Event, EventSubscriber } from '@poker/domain/models';

@injectable()
class EventRepositoryImplementation implements EventRepository {
  @inject(EVENT_TYPES.EventRemoteRepository) private _eventRemoteRepository!: EventRepository;

  async createEvent(createEvent: CreateEvent): Promise<Event> {
    return this._eventRemoteRepository.createEvent(createEvent);
  }

  async subscribeToEvent(subscriber: EventSubscriber): Promise<Event> {
    return this._eventRemoteRepository.subscribeToEvent(subscriber);
  }
}

export default EventRepositoryImplementation;
