import TypedKeys from 'utils/typed-keys'

describe('TypedKeys component', () => {
  it('Returns and arrray of typed keys from an object', () => {
    const typedKeyArray = TypedKeys({ first: "first", second: "second" })
    expect(typedKeyArray[0]).toBe('first')
  })
})