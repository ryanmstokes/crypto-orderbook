import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import Row from 'components/tables/table/row'

describe("Row component", () => {
  const values = [1, 100, 200]

  render(<Row cells={values} id={1} depth={2} direction={'reverse'} />)
  it('renders the row component', () => {
    screen.getByText(1)
    screen.getByText(100)
    screen.getByText(200)
  })
})
