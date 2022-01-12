import { put } from 'redux-saga/effects'
import { LoadConfig } from 'store/features/config'
import { SetLists, SetTableHeaders, SetWSConfig, SetLoaded, SetOrderBooks } from 'store/features/tables'
import config from 'config'

function* HandleInitApp() {

  const wsConfig = {
    url: config.tables?.url,
    feed: config.tables?.feed
  }

  try {
    yield put(LoadConfig(config));
    yield put(SetOrderBooks(config.orderbooks))
    yield put(SetLists(config.tables?.lists))
    yield put(SetTableHeaders(config.tables?.headers))
    yield put(SetWSConfig(wsConfig))
    yield put(SetLoaded())
  } catch (e) {
    //yield put(LoadConfig());
  }
}

export default HandleInitApp
