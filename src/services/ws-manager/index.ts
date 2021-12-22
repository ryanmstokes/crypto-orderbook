import { loadTables } from 'store/features/tables'
import ListManager from 'utils/tables/list-manager'
import { useDispatch } from 'react-redux'

const WsManager = () => {
  const dispatch = useDispatch()

  let UILoaded = false
  let asks: number[][] = []
  let bids: number[][] = []

  let interval: ReturnType<typeof setInterval>
  const setUpUIUpdate = () => {
    interval = setInterval(() => dispatch(loadTables({ asks, bids })), 2000)
  }

  const ws = new WebSocket("wss://www.cryptofacilities.com/ws/v1");
  const wsMessage: { [name: string]: string | string[] } = { "event": "subscribe", "feed": "book_ui_1", "product_ids": ["PI_XBTUSD"] }

  ws.onopen = (event) => {
    ws.send(JSON.stringify(wsMessage))
  }

  ws.onmessage = (event) => {

    const json = JSON.parse(event.data);
    try {
      if ((json.event = "data")) {
        if (json.feed === "book_ui_1_snapshot") {
          asks = json.asks
          bids = json.bids
        }
        if (json.feed === "book_ui_1") {
          asks = [...ListManager(asks, json.asks)]
          bids = [...ListManager(bids, json.bids)]
          if (!UILoaded) {
            setUpUIUpdate()
            UILoaded = true
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  ws.onclose = () => {
    clearInterval(interval)
  }

}

export default WsManager
