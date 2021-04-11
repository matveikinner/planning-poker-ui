import { Container } from 'inversify';
import IHttpService from '@core/domain/interfaces/http.interface';
import HttpService from '@core/data/network/services/http.service';
import TYPES from './core.types';

const coreContainer = new Container();

coreContainer.bind<IHttpService>(TYPES.HttpService).to(HttpService);

export default coreContainer;
