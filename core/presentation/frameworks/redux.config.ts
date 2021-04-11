import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import warehouseContainer from '@warehouse/data/di/inversify.config';
// import WAREHOUSE_TYPES from '@warehouse/data/di/warehouse.types';
import pokerRootReducer from '@poker/presentation/adapters/redux';
// import IWarehouseRepository from '@warehouse/domain/interfaces/warehouse.repository.interface';
// import coreRootReducer from '../adapters/redux';
import rootSaga from '../adapters/redux-saga';

/**
 * Fix to TypeScript, see
 * https://stackoverflow.com/a/52801110/12660598
 */
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// Inversify Context injection to redux Saga
// Rule violation here, as exporting TYPES from data layer
// const warehouseInteractor = warehouseContainer.get<IWarehouseRepository>(WAREHOUSE_TYPES.WarehouseInteractor);

const sagaMiddleware = createSagaMiddleware({
  /**
   * Pass context to later use DI in Redux Sagas, see
   * https://stackoverflow.com/a/55558745/12660598
   */
  context: {
    // warehouseInteractor,
  },
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  // core: coreRootReducer,
  poker: pokerRootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
