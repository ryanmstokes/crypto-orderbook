const ListManager = (list: number[][], updatedList: number[][], sort: string) => {
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
          } else {
            delete clonedList[index]
            clonedList = clonedList.filter(Boolean).filter((x: number[]) => { return x !== undefined })
          }
        }
      })
      if (!exists) {
        if (B[1] > 0) {
          clonedList.push(B)
        }
        if (sort === "ASC") {
          clonedList = clonedList.sort(function (x, y) { return x[0] - y[0] })
        }
        if (sort === "DESC") {
          clonedList = clonedList.sort(function (x, y) { return y[0] - x[0] })
        }
      }
    })
  }
  return clonedList
}

export default ListManager
