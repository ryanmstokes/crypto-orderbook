import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Tables from 'components/tables'
import 'components/orderbook/styles.css'
import Select from 'components/inputs/select'
import { UseTickers, SetTickerSize } from 'store/features/tables'
import Button from 'components/inputs/button'
import WsManager from 'services/ws-manager'
import { CloseWebSocket } from 'store/features/tables'
import { UseWSConfig, UseTables, SetCurrentProduct } from 'store/features/tables'
import { UseOrderbooks } from 'store/features/tables'

const OrderBook = ({ pair }: any) => {
  const dispatch = useDispatch()
  const { id, current } = UseOrderbooks(pair)

  let { url, feed, symbol } = UseWSConfig(current)
  let tableData = UseTables(id, current)

  useEffect(() => {
    WsManager(id, current, url, feed, symbol, dispatch)
  }, [id, current, url, feed, symbol, dispatch])

  const setTicker = (size: number) => {
    dispatch(SetTickerSize({ id: id, ticker: Number(size) }))
  }

  const tickerOptions: any = {
    list: UseTickers(id),
    callback: setTicker
  }

  const toggle = () => {
    dispatch(CloseWebSocket(id))
    dispatch(SetCurrentProduct(id))
  }

  const toggleOptions: any = {
    title: "toggle",
    callback: toggle
  }

  return (
    <div data-testid="orderbook" className="orderbook">
      {
        tableData ?
          <div>
            <div>
              Grouping: <Select {...tickerOptions} />
            </div>
            <Tables {...tableData} />
            <div className="toggle"><Button {...toggleOptions} /></div>
          </div>
          : <div>Loading</div>
      }
    </div>
  )
}

export default OrderBook
