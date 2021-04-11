import { CreateEvent, Event, EventSubscriber } from '../../models/index';

interface EventRepository {
  createEvent(createEvent: CreateEvent): Promise<Event>;
  subscribeToEvent(subscriber: EventSubscriber): Promise<Event>;
}

export default EventRepository;
