import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import Widget from 'components/widget'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import tables from 'store/features/config/initial-state'

describe("Widget component", () => {
  const mockStore = configureStore()
  const store = mockStore({ config: tables })
  render(<Provider store={store}><Widget /></Provider>)

  it('renders the widget component', () => {
    expect(screen.getByTestId('Widget')).toBeTruthy()
    expect(screen.getByTestId('Table_ETH')).toBeTruthy()
  })
})

