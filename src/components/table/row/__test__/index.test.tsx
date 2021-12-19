import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import Row from 'components/table/row'

describe("Row component", () => {
  render(<Row />)
  it('renders the row component', () => {
    expect(screen.getByTestId('Row')).toBeTruthy()
  })
})
