import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Row from 'components/tables/table/row'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import config from 'store/features/config/initial-state'
import tables from 'store/features/tables/initial-state'

describe('Row component', () => {
  const mockStore = configureStore()
  const store = mockStore({ config, lists: tables })
  const values = { amount: 1, price: 100, total: 200 }
  jest.mock('store/features/config', () => ({
    UseMobile: () => false,
  }))

  render(<Provider store={store}><Row cells={values} id={1} index={0} depth={2} direction="reverse" /></Provider>)
  it('renders the row component', () => {
    screen.getByText(1)
    screen.getByText(100)
    screen.getByText(200)
  })
})
