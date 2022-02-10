import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Cell from 'components/tables/table/cell'

describe('Cell component', () => {
  render(<Cell value={8} color="black" />)
  it('renders the cell component', () => {
    expect(screen.getByTestId('Cell')).toBeTruthy()
    screen.getByText(8)
    /* ...It renders a number within a div */
  })
})
