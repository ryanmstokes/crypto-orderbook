import { Lists, Values } from 'types'
import TypedKeys from 'utils/typed-keys'
import deepClone from 'utils/deep-clone'

const SetTablesReducer = (state: Lists, action: { payload: { current: string, id: string } }) => {
  const { current } = action.payload
  const { id } = action.payload

  interface PayloadLists {
    [name: string]: { [name: string]: string | number }
  }

  const payloadLists: PayloadLists = deepClone(state.orderbooks![id].compiled)
  state.orderbooks![id].headers = state.headers
  state.orderbooks![id].inc = state.lists[current].inc

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const orders: any = {}

  const typedList = TypedKeys(payloadLists)
  typedList.reverse().forEach((key: string | number) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const tickeredList: any = payloadLists[key].values

    let cumulativeTotal = 0
    const decoratedObjectArray: Values[] = []
    let percentage: number

    tickeredList.forEach((item: number[]) => {
      cumulativeTotal += item[1]
      decoratedObjectArray.push(
        {
          cells: {
            price: item[0],
            amount: item[1],
            total: cumulativeTotal
          }
        }
      )
    })

    decoratedObjectArray.forEach((item: Values, index: number) => {
      percentage = item.cells.total
        / (decoratedObjectArray[tickeredList.length - 1].cells.total
          / 100
        )
      decoratedObjectArray[index].depth = percentage
    })

    orders[key] = { title: key, sortBy: payloadLists[key].sortBy, values: decoratedObjectArray }
    // eslint-disable-next-line no-console
    console.log('orders')
    const headerArray: { [name: string]: string } = {}
    Object.keys(state.lists[Object.keys(state.lists)[0]].prices![key].values![0].cells).forEach(
      (cell, index) => {
        headerArray[`title${index}`] = cell
      }
    )
    state.headers = headerArray
  })

  state.orderbooks![id] = { ...state.orderbooks![id], values: orders }
}

export default SetTablesReducer
