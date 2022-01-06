import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import Widget from 'components/widget'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import config from 'store/features/config/initial-state'
import tables from 'store/features/tables/initial-state'

jest.mock("store/features/tables", () => ({
  useTickers: () => ([1, 2, 3]),
  useTables: () => ({
    title: "Order Book",
    current: "XBTC",
    tables: [{ title: "Bids", sort: "ASC", values: [{ amount: 100, price: 100, total: 1000 }, { amount: 100, price: 100, total: 1000 }] }, { title: "Bids", sort: "ASC", values: [{ amount: 100, price: 100, total: 1000 }, { amount: 100, price: 100, total: 1000 }] }]
  }),
  useTableHeaders: () => ['price', 'amount', 'total']
})
)

describe("Widget component", () => {
  const mockStore = configureStore()
  const store = mockStore({ config: config, lists: tables })
  render(<Provider store={store}><Widget /></Provider>)
  it('renders the widget component', () => {
    expect(screen.getByTestId('Widget')).toBeTruthy()
    expect(screen.getByTestId('Widget')).toHaveTextContent(tables.title)
  })
})

