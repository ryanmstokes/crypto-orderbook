import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Table from 'components/tables/table'
import config from 'store/features/config/initial-state'
import tables from 'store/features/tables/initial-state'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

describe('Table component', () => {
  const mockStore = configureStore()
  const store = mockStore({ config, lists: tables })
  const list = tables.lists[Object.keys(tables.lists)[1]]
  const prices = list.prices!.bids

  render(<Provider store={store}><Table table={prices} id={0} /></Provider>)
  it('renders the table component', () => {
    expect(
      screen.getByTestId('table_row0'),
    ).toBeTruthy()
  })
})
