const TickeredList = (clonedList: any) => {
  let currrentSize = 0.5
  let tickerSize = 1
  let tickeredList: any = []
  let currentAmount = 0
  let currentPrice = 0
  let currentTickerRange = 0
  /** check the number start on a ticker size if not round down or up */
  clonedList.forEach((item: any, index: number): any => {
    if (Math.floor(item[0]) === item[0]) {
      currentPrice = item[0]
      currentAmount += item[1]
      currentTickerRange = currentPrice + tickerSize
      if (clonedList[index + 1] && clonedList[index + 1][0] >= currentTickerRange) {
        tickeredList.push([currentPrice, currentAmount])
        currentPrice = 0
        currentAmount = 0
        currentTickerRange = 0
      }
    } else {
      currentPrice = item[0] - currrentSize
      currentAmount += item[1]
      tickeredList.push([currentPrice, currentAmount])
      currentPrice = 0
      currentAmount = 0
      currentTickerRange = 0
    }
  })
  return tickeredList

}

export default TickeredList
