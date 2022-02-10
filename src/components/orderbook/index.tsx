import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import WsManager from 'services/ws-manager'
import {
  UseWSConfig, UseTables, UseOrderbooks, CloseWebSocket,
} from 'store/features/tables'
import Tables from 'components/tables'
import { StyledOrderbook, StyledOrderbookContent } from 'components/orderbook/styled'
import OrderbookHeader from 'components/orderbook/header'
import OrderbookFooter from 'components/orderbook/footer'

function OrderBook({ pair }: { pair: string }) {
  const dispatch = useDispatch()
  const [wsConnection, setWsConnection] = useState(true)

  const { id, current } = UseOrderbooks(pair)

  const { url, feed, symbol } = UseWSConfig(current)
  const tableData = UseTables(id)

  useEffect(() => {
    if (wsConnection) {
      WsManager(id, current, url, feed, symbol, dispatch)
    }
  }, [id, current, url, feed, symbol, dispatch, wsConnection])

  const closeDown = () => {
    setWsConnection(false)
    dispatch(CloseWebSocket(id))
  }

  const toggleWebSocket = () => {
    wsConnection ? closeDown() : setWsConnection(true)
  }
  // eslint-disable-next-line no-console
  console.log('orderbook', tableData)
  return (
    <StyledOrderbook data-testid="orderbook">
      {
        tableData
          ? (
            <StyledOrderbookContent>
              <OrderbookHeader
                title="Orderbook"
                id={id}
                symbol={symbol}
              />
              <Tables tables={tableData.tables} />
              <OrderbookFooter
                id={id}
                wsToggle={toggleWebSocket}
                wsConnection={wsConnection}
              />
            </StyledOrderbookContent>
          )
          : <div>Loading</div>
      }
    </StyledOrderbook>
  )
}

export default OrderBook
