import { all } from 'redux-saga/effects';
import pokerRootSagas from '@poker/presentation/adapters/redux-saga';

export default function* rootSaga() {
  yield all([pokerRootSagas()]);
}
