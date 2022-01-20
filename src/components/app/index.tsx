import PageMeta from 'components/app/meta-tags'
import OrderBook from 'components/orderbook'
import { UseTitle, InitApp, SetMobile } from 'store/features/config'
import { UseLoaded } from 'store/features/tables'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import config from 'config'
import { StyledApp, StyledAppContent } from 'components/app/styled'

const App = () => {

  const dispatch = useDispatch()
  dispatch(SetMobile(window.innerWidth <= 810))

  useEffect(() => {
    dispatch(InitApp(config))
    const onResize = () => {
      dispatch(SetMobile(window.innerWidth <= 810))
    }
    window.addEventListener("resize", onResize)
    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [dispatch])

  const title: string = UseTitle()
  const loaded = UseLoaded()

  return (
    <div>
      <StyledApp data-testid="App" >
        <PageMeta />
        {
          loaded ? (
            <StyledAppContent >
              <h1>{title}</h1>
              <OrderBook pair="btc_eth" />
              {/* <OrderBook pair="eth_btc" /> */}
            </StyledAppContent>
          ) : <div>Loading</div>
        }
      </StyledApp >
    </div>
  )
}

export default App
