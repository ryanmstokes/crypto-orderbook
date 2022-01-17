import 'components/app/style.css'
import PageMeta from 'components/app/meta-tags'
import OrderBook from 'components/orderbook'
import { UseTitle, InitApp } from 'store/features/config'
import { UseLoaded } from 'store/features/tables'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import config from 'config'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(InitApp(config))
  }, [dispatch])

  const title: string = UseTitle()
  const loaded = UseLoaded()

  return (
    <div>
      <div className="App" data-testid="App" >
        <PageMeta />
        {
          loaded ? (
            <div>
              <h1>{title}</h1>
              <OrderBook pair="btc_eth" />
              {/* <OrderBook pair="eth_btc" /> */}
            </div>
          ) : <div>Loading</div>
        }
      </div >

    </div>
  )
}

export default App
