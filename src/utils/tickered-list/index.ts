import deepClone from 'utils/deep-clone'

const TickeredList = (clonedList: number[][], sort: string, tickerSize: number) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let tickeredList: any = []
  let currentAmount = 0
  let currentPrice = 0
  let currentTickerRange = 0

  const sortedList = deepClone(clonedList.sort((x: number[], y: number[]) => x[0] - y[0]))

  for (let i = 0, n = sortedList.length; i < n; i += 1) {
    const item = sortedList[i]
    if (Number.isInteger(item[0] / tickerSize)) {
      currentPrice = Number(item[0].toFixed(2))/** .toFixed(2) */
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
      currentPrice = Number(currentPrice.toFixed(2))
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
  if (sort === 'DESC') {
    tickeredList = deepClone(tickeredList.sort((x: number[], y: number[]) => y[0] - x[0]))
  }

  return tickeredList.slice(0, 15)
}

export default TickeredList
