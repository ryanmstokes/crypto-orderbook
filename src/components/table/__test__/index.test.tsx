import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import Table from 'components/table'
import tables from 'store/features/tables/initial-state'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

describe("Table component", () => {
  const mockStore = configureStore()
  const store = mockStore({ config: tables })
  const list = tables.lists[Object.keys(tables.lists)[0]]
  const title = list.title
  render(<Provider store={store}><Table {...list} /></Provider>)

  it('renders the table component', () => {
    expect(
      screen.getByTestId(title)).toBeTruthy()
  })
})

