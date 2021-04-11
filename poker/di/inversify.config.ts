import { Container } from 'inversify';
import coreContainer from '@core/di/inversify.config';
import EVENT_TYPES from './event.types';
import EventRepository from '@poker/domain/interfaces/event/event.repository.interface';
import EventRepositoryImplementation from '@poker/data/event.repository.implementation';
import EventRemoteRepository from '@poker/data/remote/event.remote.repository';
import { CreateEventInteractor, SubscribeToEventInteractor } from '@poker/domain/interactors';
import EventService from '@poker/data/remote/services/event/event.service';

// Create base DI container for the module
const container = new Container();

// Merge module DI container with Core module DI container
const eventContainer = Container.merge(coreContainer, container);

// TODO: EventService binding here, does it need separate interface?
// Repository Pattern DI bindings
eventContainer.bind<EventRepository>(EVENT_TYPES.EventRepository).to(EventRepositoryImplementation);
eventContainer.bind<EventRepository>(EVENT_TYPES.EventRemoteRepository).to(EventRemoteRepository);

// Interactor DI bindings
// It might be that binding type will require separate interface if class cannot be used as interface directly
eventContainer.bind<CreateEventInteractor>(EVENT_TYPES.CreateEventInteractor).to(CreateEventInteractor);
eventContainer.bind<SubscribeToEventInteractor>(EVENT_TYPES.SubscribeToEventInteractor).to(SubscribeToEventInteractor);

eventContainer.bind<EventService>(EVENT_TYPES.EventService).to(EventService);

// Interactor exports
export const createEventInteractor = eventContainer.get<CreateEventInteractor>(EVENT_TYPES.CreateEventInteractor);
export const subscribeToEventInteractor = eventContainer.get<SubscribeToEventInteractor>(
  EVENT_TYPES.SubscribeToEventInteractor
);

export default eventContainer;
