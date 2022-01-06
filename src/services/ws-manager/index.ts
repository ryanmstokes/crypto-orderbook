import { setCompiled } from 'store/features/tables'
import ListManager from 'utils/tables/list-manager'
import { useDispatch } from 'react-redux'
import { loadTables } from 'store/features/tables'

const deepClone = (object: any) => JSON.parse(JSON.stringify(object))

const WsManager = () => {
  const dispatch = useDispatch()

  let asks: number[][] = []
  let bids: number[][] = []
  let counter = 0
  let UIRefreshRate = 150

  const ws = new WebSocket("wss://www.cryptofacilities.com/ws/v1")

  const wsMessage: { [name: string]: string | string[] } = { "event": "subscribe", "feed": "book_ui_1", "product_ids": ["PI_XBTUSD"] }

  ws.onopen = (event) => {
    ws.send(JSON.stringify(wsMessage))
  }

  ws.onmessage = (event) => {

    const json = JSON.parse(event.data)
    try {
      if ((json.event = "data")) {
        /** Turn this into switch  statement */
        if (json.feed === "book_ui_1_snapshot") {
          asks = deepClone(json.asks)
          bids = deepClone(json.bids)
          dispatch(setCompiled([
            {
              title: "asks",
              sortBy: "DESC",
              values: deepClone(json.asks)
            },
            {
              title: "bids",
              sortBy: "ASC",
              values: deepClone(json.bids)
            },
          ]
          ))
        }
        if (json.feed === "book_ui_1") {
          if (counter <= UIRefreshRate) {
            counter += 1
          }

          asks = deepClone(ListManager(asks, json.asks))
          bids = deepClone(ListManager(bids, json.bids))

          dispatch(setCompiled({
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
            },
          }
          ))
          if (counter === UIRefreshRate) {
            dispatch(loadTables())
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
