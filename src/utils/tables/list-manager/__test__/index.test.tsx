import "@testing-library/jest-dom/extend-expect"
import ListManager from 'utils/tables/list-manager'

describe("Select component", () => {
  const managedList = ListManager([[1, 5], [2, 10]], [[1, 0], [2, 5]])
  it('renders the row component', () => {
    expect(managedList[0][1]).toBe(5)
    expect(managedList.length).toBe(1)
  })
})
