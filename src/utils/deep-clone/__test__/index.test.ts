import '@testing-library/jest-dom/extend-expect'
import deepClone from 'utils/deep-clone'

describe('Deep Clone function', () => {
  const originalObject = { element: { title: 'title', id: 1 } }

  const deepCloneObject = deepClone(originalObject)

  deepCloneObject.element.title = 'title2'

  it('returns a deep clone', () => {
    expect(deepCloneObject.element.title === originalObject.element.title).toBe(false)
  })
})
