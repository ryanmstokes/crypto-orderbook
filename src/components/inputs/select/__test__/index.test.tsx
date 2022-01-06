import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import Select from 'components/inputs/select'

describe("Select component", () => {
  const mockCallBack = jest.fn()

  const options = {
    list: [1, 2, 3],
    callback: mockCallBack
  }

  render(<Select {...options} />)
  it('renders the row component', () => {
    screen.getByText(1)
    screen.getByText(2)
    screen.getByText(3)
    const select = screen.getByTestId('Select')
    expect(select).toBeInTheDocument()
  })
})
