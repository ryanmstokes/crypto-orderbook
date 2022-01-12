import deepClone from 'utils/deep-clone'

const ListManager = (list: number[][], updatedList: number[][]) => {

  let clonedList = deepClone(list)

  let exists = false
  if (updatedList && updatedList.length > 0) {
    for (var i = 0, n = updatedList.length; i < n; ++i) {
      const B = updatedList[i]
      for (var x = 0, l = list.length; x < l; ++x) {
        const A = list[x]
        if (A && B && A[0] === B[0]) {
          if (B[1] !== 0) {
            clonedList[x][1] = B[1]
            exists = true
          } else {
            delete clonedList[x]
          }
        }
      }
      if (!exists) {
        if (B[1] > 0) {
          clonedList.push(B)
        }
      }
    }
  }

  clonedList = clonedList.filter(Boolean).filter((x: number[]) => { return x !== undefined || null })

  return clonedList
}

export default ListManager
