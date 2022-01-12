import { takeLatest } from 'redux-saga/effects'
import { InitApp } from 'store/features/config'
import HandleInitApp from 'store/features/config/saga/init-app'

export function* watcherSaga() {
  yield (takeLatest(InitApp.type, HandleInitApp))
}