import { inject, injectable } from 'inversify';
import EVENT_TYPES from '../../../di/event.types';
import EventRepository from '@poker/domain/interfaces/event/event.repository.interface';
import { Event, EventSubscriber } from '../../models';

// TODO: Attempt to implement input, and output, as these can vary from any models and require separate arguments
// TODO: Check if I can do constructor injection as this is not React Component
@injectable()
export class SubscribeToEventInteractor {
  @inject(EVENT_TYPES.EventRepository) private _eventRepository!: EventRepository;

  async invoke(subscriber: EventSubscriber): Promise<Event> {
    return this._eventRepository.subscribeToEvent(subscriber);
  }
}
