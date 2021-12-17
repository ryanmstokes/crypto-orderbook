import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import App from 'components/app'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import initialState from 'store/features/config/initial-state'
import GetMeta from 'utils/testing/get-meta'

describe("App component", () => {
  const mockStore = configureStore()
  const store = mockStore({ config: initialState })
  render(<Provider store={store}><App /></Provider>)

  it('renders the child component', () => {
    expect(screen.getByTestId(/App/i)).toBeTruthy()
  })

  it('renders meta tags in the head of the document', () => {
    expect(document.title).toEqual(
      initialState.title
    )
    expect(
      GetMeta("description", document.getElementsByTagName("meta"), "name", "content")).toEqual(
        initialState.description
      )
  })
})
