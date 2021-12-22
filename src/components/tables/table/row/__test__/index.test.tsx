import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import Row from 'components/tables/table/row'

describe("Row component", () => {
  const values = { price: 1, amount: 100 }

  render(<Row {...values} />)
  it('renders the row component', () => {
    screen.getByText(1)
    screen.getByText(100)
  })
})
