import { put } from 'redux-saga/effects'
import { LoadConfig } from 'store/features/config'
import { SetLists, SetTableHeaders, SetWSConfig, SetLoaded, SetOrderBooks } from 'store/features/tables'
import { Config } from 'types'

function* HandleInitApp(action: { type: string, payload: Config }) {
  const conf = action.payload
  const wsConfig = {
    url: conf.tables!.url,
    feed: conf.tables!.feed
  }
  try {
    yield put(LoadConfig(conf));
    yield put(SetOrderBooks(conf.orderbooks!))
    yield put(SetLists(conf.tables!.lists))
    yield put(SetTableHeaders(conf.tables!.headers))
    yield put(SetWSConfig(wsConfig))
    yield put(SetLoaded())
  } catch (e) {
    //yield put(LoadConfig());
  }
}

export default HandleInitApp
