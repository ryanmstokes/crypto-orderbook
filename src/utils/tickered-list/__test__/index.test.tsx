import TickeredList from 'utils/tickered-list'

describe('TickeredList function', () => {
  it('passes back a list grouped by ticker size', () => {
    const groupedList = TickeredList([[1, 5], [2, 10], [3, 10]], 'ASC', 1)
    expect(groupedList[0][0]).toBe(3)
  })
})