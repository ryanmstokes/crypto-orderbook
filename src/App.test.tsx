import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import App from './App'

test('renders the child component and displays a string', () => {
  render(<App />)
  /** Check child is rendered */
  expect(screen.getByTestId(/OrderBook/i)).toBeTruthy()
  /** Check String is displayed */
  expect(screen.getByText(/Order Book/i)).toBeInTheDocument()
})
