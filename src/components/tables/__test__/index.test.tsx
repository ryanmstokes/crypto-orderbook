import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import Tables from 'components/tables'
import configureStore from 'redux-mock-store'
import config from 'store/features/config/initial-state'
import tables from 'store/features/tables/initial-state'
import { Provider } from 'react-redux'

describe("Tables component", () => {
  const mockStore = configureStore()
  const store = mockStore({ config: config, lists: tables })

  render(<Provider store={store}><Tables /></Provider>)

  it('renders the table component', () => {
    screen.getByText(tables.title)
  })
})

