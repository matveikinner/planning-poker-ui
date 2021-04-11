import { inject, injectable } from 'inversify';
import CORE_TYPES from '@core/di/core.types';
import HttpService from '@core/domain/interfaces/http.interface';
import EventNetwork from '../../models/event.network';
import { EVENT_RESOURCE_URLS } from './event.constants';
import { CreateEvent, EventSubscriber } from '@poker/domain/models';

@injectable()
class EventService {
  @inject(CORE_TYPES.HttpService) private _httpService!: HttpService;

  async createEvent(createEvent: CreateEvent): Promise<EventNetwork.Response> {
    return (
      await this._httpService
        .getClient()
        .post<EventNetwork.Response>(EVENT_RESOURCE_URLS.POST.CREATE_EVENT, createEvent)
    ).data;
  }

  async subscribeToEvent(subscriber: EventSubscriber): Promise<EventNetwork.Response> {
    return (
      await this._httpService
        .getClient()
        .post<EventNetwork.Response>(EVENT_RESOURCE_URLS.POST.SUBSCRIBE_TO_EVENT, subscriber)
    ).data;
  }
}

export default EventService;
