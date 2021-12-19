import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import Tables from 'components/tables'
import config from 'store/features/config/initial-state'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

describe("Tables component", () => {
  const mockStore = configureStore()
  const store = mockStore({ config: config })
  render(<Provider store={store}><Tables /></Provider>)
  const table = Object.keys(config.tables.lists)[0]
  it('renders the table component', () => {
    expect(screen.getByTestId(table)).toBeTruthy()
    screen.getByText(config.tables.title)
  })
})

