import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import Orderbook from 'components/orderbook'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import config from 'store/features/config/initial-state'
import tables from 'store/features/tables/initial-state'

jest.mock("store/features/tables", () => ({
  UseTickers: () => ([1, 2, 3]),
  UseTables: () => ({
    title: "Order Book",
    current: "XBTC",
    tables: [
      {
        title: "Bids",
        sort: "ASC",
        values: [
          {
            percentage: 20,
            cells: { amount: 100, price: 100, total: 1000 }
          },
          {
            percentage: 20,
            cells: { amount: 100, price: 100, total: 1000 }
          }
        ]
      },
      {
        title: "Bids",
        sort: "ASC",
        values: [
          {
            percentage: 20,
            cells: { amount: 100, price: 100, total: 1000 }
          },
          {
            percentage: 20,
            cells: { amount: 100, price: 100, total: 1000 }
          }
        ]
      }]
  }),
  UseOrderbooks: () => { return { id: 'btc_eth', current: "XBTC" } },
  UseWSConfig: () => { return { url: "wss://www.cryptofacilities.com/ws/v1", feed: "book_ui_1", symbol: "PI_XBTUSD" } },
  UseTableHeaders: () => ["Price", "amount", "Total"],
  SetInc: () => {
    return { type: 'SetInc' }
  },
  SetTickerSize: () => { return { type: 'SetTickerSize' } }
})
)

describe("orderbook component", () => {
  const mockStore = configureStore()
  const store = mockStore({ config: config, lists: tables })
  render(<Provider store={store}><Orderbook pair="btc-eth" /></Provider>)
  it('renders the orderbook component', () => {
    expect(screen.getByTestId('orderbook')).toBeTruthy()
    expect(screen.getByTestId('orderbook')).toHaveTextContent(tables.title)
  })
})

