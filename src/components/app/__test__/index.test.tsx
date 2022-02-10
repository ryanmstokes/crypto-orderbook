import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from 'components/app'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import config from 'store/features/config/initial-state'
import tables from 'store/features/tables/initial-state'
import GetValByPropInArr from 'utils/testing/get-val-by-prop-in-arr'

describe('App component', () => {
  jest.mock('store/features/tables', () => ({
    UseLoaded: () => true,
  }))
  const mockStore = configureStore()
  const store = mockStore({ config, lists: tables })
  render(<Provider store={store}><App /></Provider>)

  it('renders the child component', () => {
    expect(screen.getByTestId(/App/i)).toBeTruthy()
  })

  it('renders meta tags in the head of the document', () => {
    expect(document.title).toEqual(config.title)
    expect(
      GetValByPropInArr('description', document.getElementsByTagName('meta')),
    ).toEqual(
      config.description,
    )
  })
})
