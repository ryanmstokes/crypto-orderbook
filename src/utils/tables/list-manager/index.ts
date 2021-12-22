const ListManager = (list: number[][], updatedList: number[][]) => {
  let clonedList = [...list]
  let exists = false
  if (updatedList && updatedList.length > 0) {
    updatedList.forEach((B: number[]) => {
      clonedList.forEach((A: number[], index: number) => {
        if (A && B && A[0] === B[0]) {
          if (B[1] !== 0) {
            if (clonedList[index] && clonedList[index][1]) {
              Object.assign(clonedList[index][1], B[1])
              exists = true
            }
          }
        }
      })
      if (!exists) {
        clonedList.push(B)
        clonedList = clonedList.filter(Boolean).filter((x: number[]) => { return x[1] > 0 }).sort(function (x, y) { return x[0] - y[0] }).slice(0, 30)
      }
    })
  }

  return clonedList
}

export default ListManager
