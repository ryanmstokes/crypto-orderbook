import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import Row from 'components/tables/table/row'

describe("Row component", () => {
  const values = [1, 100, 200]

  render(<Row values={values} />)
  it('renders the row component', () => {
    screen.getByText(1)
    screen.getByText(100)
    screen.getByText(200)
  })
})
