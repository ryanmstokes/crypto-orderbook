import '@testing-library/jest-dom/extend-expect'
import GetValByPropInArr from 'utils/testing/get-val-by-prop-in-arr'

describe('Meta Tag Filter', () => {
  it('Passes back the value of the matching Meta Tag', () => {
    expect(GetValByPropInArr('description', [{ name: 'description', content: 'blah' }, { name: 'title', content: 'hawaii' }])).toEqual('blah')
  })
})
