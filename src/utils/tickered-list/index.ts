const deepClone = (object: any) => JSON.parse(JSON.stringify(object))

const TickeredList = (clonedList: any, sort: string, tickerSize: number) => {
  let tickeredList: any = []
  let currentAmount = 0
  let currentPrice = 0
  let currentTickerRange: number = 0
  const sortedList = deepClone(clonedList.sort(function (x: any, y: any) { return x[0] - y[0] }))

  for (var i = 0, n = sortedList.length; i < n; ++i) {

    const item = sortedList[i]
    if (Number.isInteger(item[0] / tickerSize)) {
      currentPrice = item[0]
      currentAmount += item[1]
      currentTickerRange = currentPrice + tickerSize

      if ((sortedList[i + 1] && sortedList[i + 1][0] >= currentTickerRange) || !sortedList[i + 1]) {
        tickeredList.push([currentPrice, currentAmount])
        currentPrice = 0
        currentAmount = 0
        currentTickerRange = 0
      }

    } else {
      currentPrice = Math.floor(item[0] / tickerSize) * tickerSize
      currentAmount += item[1]

      currentTickerRange = currentPrice + tickerSize

      if ((sortedList[i + 1] && sortedList[i + 1][0] >= currentTickerRange) || !sortedList[i + 1]) {
        tickeredList.push([currentPrice, currentAmount])
        currentPrice = 0
        currentAmount = 0
        currentTickerRange = 0
      }
    }
  }
  if (sort === "ASC") {
    tickeredList = deepClone(tickeredList.sort(function (x: any, y: any) { return y[0] - x[0] }))
  }

  return tickeredList.slice(0, 15)
}

export default TickeredList
