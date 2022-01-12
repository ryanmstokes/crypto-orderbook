import { SetCompiled } from 'store/features/tables'
import ListManager from 'utils/tables/list-manager'
import { SetTables, SetTickerSize, SetInc } from 'store/features/tables'
import { SetWebSocket } from 'store/features/tables'
import deepClone from 'utils/deep-clone'

const setCompiledObject = (id: any, asks: any, bids: any) => {
  return {
    id: id,
    values: {
      asks:
      {
        title: "asks",
        sortBy: "DESC",
        values: deepClone(asks)
      },
      bids:
      {
        title: "bids",
        sortBy: "ASC",
        values: deepClone(bids)
      }
    }
  }
}
const WsManager = (
  id: string,
  current: string,
  url: string,
  feed: string,
  product_ids: string,
  dispatch: any
) => {

  dispatch(SetInc({ id: id, current: current }))
  dispatch(SetTickerSize({ id: id, ticker: 0 }))

  let asks: number[][] = []
  let bids: number[][] = []
  let counter = 0
  let UIRefreshRate = 30

  const ws = new WebSocket(url)

  const wsMessage: { [name: string]: string | string[] } = { "event": "subscribe", "feed": feed, "product_ids": [product_ids] }

  ws.onopen = (event) => {
    ws.send(JSON.stringify(wsMessage))
    dispatch(SetWebSocket({ id, ws }))
  }

  ws.onmessage = (event) => {

    const json = JSON.parse(event.data)
    try {
      if ((json.event = "data")) {
        /** Turn this into switch  statement */
        if (json.feed === "book_ui_1_snapshot") {
          asks = deepClone(json.asks)
          bids = deepClone(json.bids)
          dispatch(SetCompiled(setCompiledObject(id, bids, asks)))
        }
        if (json.feed === "book_ui_1") {

          if (counter <= UIRefreshRate) {
            counter += 1
          }

          asks = deepClone(ListManager(asks, json.asks))
          bids = deepClone(ListManager(bids, json.bids))

          dispatch(SetCompiled(setCompiledObject(id, bids, asks)
          ))
          if (counter === UIRefreshRate) {
            dispatch(SetTables({ current, id }))
            counter = 0
          }
        }
      }
    } catch (err) {
      console.log(err)
    }
  }

  ws.onclose = () => {
    /** handle closed sockets */
  }
}


export default WsManager
