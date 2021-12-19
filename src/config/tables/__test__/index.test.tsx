import tables from 'config/tables'
import "@testing-library/jest-dom/extend-expect"

describe("Config definition", () => {
  it('The definition exists and matches types', () => {
    expect(typeof tables).toEqual('object')
    expect(typeof tables.title).toEqual('string')
    expect(typeof tables.lists).toEqual('object')
  })
})

