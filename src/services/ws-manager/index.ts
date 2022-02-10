import {
  SetCompiled, SetTables, SetTickerSize, SetInc, SetWebSocket,
} from 'store/features/tables'
import ListManager from 'utils/tables/list-manager'
import deepClone from 'utils/deep-clone'

const setCompiledObject = (id: string, asks: number[][], bids: number[][]) => ({
  id,
  values: {
    asks:
    {
      title: 'asks',
      sortBy: 'ASC',
      values: deepClone(asks),
    },
    bids:
    {
      title: 'bids',
      sortBy: 'DESC',
      values: deepClone(bids),
    },
  },
})

const WsManager = (
  id: string,
  current: string,
  url: string,
  feed: string,
  productIDs: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: any
) => {
  dispatch(SetInc({ id, current }))
  dispatch(SetTickerSize({ id, ticker: 0 }))

  let asks: number[][] = []
  let bids: number[][] = []
  let counter = 0
  const UIRefreshRate = 30

  const ws: WebSocket = new WebSocket(url)

  const wsMessage: { [name: string]: string | string[] } = { event: 'subscribe', feed, product_ids: [productIDs] }

  ws.onopen = () => {
    ws.send(JSON.stringify(wsMessage))
    dispatch(SetWebSocket({ id, ws }))
  }

  ws.onmessage = (event) => {
    const json = JSON.parse(event.data)
    try {
      // eslint-disable-next-line no-console
      // if ((json.event === 'data')) {
      if (json.feed === 'book_ui_1_snapshot') {
        // eslint-disable-next-line no-console
        console.log('snapshot')
        asks = deepClone(json.asks)
        bids = deepClone(json.bids)
        dispatch(SetCompiled(setCompiledObject(id, asks, bids)))
      }
      if (json.feed === 'book_ui_1') {
        // eslint-disable-next-line no-console
        console.log('update')
        if (counter <= UIRefreshRate) {
          counter += 1
        }

        asks = deepClone(ListManager(asks, json.asks))
        bids = deepClone(ListManager(bids, json.bids))

        dispatch(SetCompiled(setCompiledObject(id, asks, bids)))
        if (counter === UIRefreshRate) {
          dispatch(SetTables({ current, id }))
          counter = 0
        }
      }
      // }
    } catch (err) {
      // console.log(err)
    }
  }

  ws.onclose = () => {
    /** handle closed sockets */
  }
}

export default WsManager
