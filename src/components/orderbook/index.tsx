import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import 'components/orderbook/styles.css'
import WsManager from 'services/ws-manager'
import { UseWSConfig, UseTables, UseOrderbooks, CloseWebSocket } from 'store/features/tables'
import GroupingSelect from 'components/inputs/grouping-select'
import Tables from 'components/tables'
import ToggleProducts from 'components/inputs/toggle-products'
import KillFeed from 'components/inputs/kill-feed'

const OrderBook = ({ pair }: { pair: string }) => {
  const dispatch = useDispatch()
  const [wsConnection, setWsConnection] = useState(true)

  const { id, current } = UseOrderbooks(pair)
  let { url, feed, symbol } = UseWSConfig(current)
  let tableData = UseTables(id, current)

  useEffect(() => {
    if (wsConnection) { WsManager(id, current, url, feed, symbol, dispatch) }
  }, [id, current, url, feed, symbol, dispatch, wsConnection])

  const closeDown = () => {
    setWsConnection(false)
    dispatch(CloseWebSocket(id))
  }

  const toggleWebSocket = () => {
    wsConnection ? closeDown() : setWsConnection(true)
  }

  const connectionMessage = wsConnection ?
    <div>Websocket live</div>
    : <div>Websocket Disconnected</div>

  return (
    <div data-testid="orderbook" className="orderbook">
      {
        tableData ?
          <div>
            <GroupingSelect id={id} />
            <Tables {...tableData} />
            <ToggleProducts id={id} />
            <KillFeed id={id} callback={toggleWebSocket} />
            {connectionMessage}
          </div>
          : <div>Loading</div>
      }
    </div>
  )
}

export default OrderBook
