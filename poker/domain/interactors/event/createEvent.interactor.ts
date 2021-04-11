import { inject, injectable } from 'inversify';
import EVENT_TYPES from '../../../di/event.types';
import EventRepository from '../../interfaces/event/event.repository.interface';
import { CreateEvent, Event } from '../../models';

// TODO: Attempt to implement input, and output, as these can vary from any models and require separate arguments
// TODO: Check if I can do constructor injection as this is not React Component
@injectable()
export class CreateEventInteractor {
  @inject(EVENT_TYPES.EventRepository) private _eventRepository!: EventRepository;

  // TODO: Rename to invoke, as class name must expose the functionality
  async invoke(createEvent: CreateEvent): Promise<Event> {
    return this._eventRepository.createEvent(createEvent);
  }
}
