import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import Cell from 'components/table/cell'

describe("Cell component", () => {
  render(<Cell />)
  it('renders the cell component', () => {
    expect(screen.getByTestId('Cell')).toBeTruthy()
  })
})
