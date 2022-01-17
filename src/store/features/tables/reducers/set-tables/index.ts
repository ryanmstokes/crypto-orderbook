import { Lists, Values } from 'types'
import TypedKeys from 'utils/typed-keys'
import deepClone from 'utils/deep-clone'

const SetTablesReducer = (state: Lists, action: { payload: { current: string, id: string } }) => {

  const current = action.payload.current
  const id = action.payload.id

  const payloadLists = deepClone(state.orderbooks![id].compiled)
  state.orderbooks![id].headers = state.headers
  state.orderbooks![id].inc = state.lists[current].inc

  let orders: any = {}
  TypedKeys(payloadLists).forEach((key: any) => {

    const tickeredList: any = payloadLists[key].values

    let cumulativeTotal = 0
    let decoratedObjectArray: Values[] = []
    let percentage: number

    tickeredList.forEach((item: number[]) => {
      cumulativeTotal += item[1]
      decoratedObjectArray.push({ cells: { price: item[0], amount: item[1], total: cumulativeTotal } })
    })

    decoratedObjectArray.forEach((item: any, index: number) => {
      percentage = item.cells.total / (decoratedObjectArray[tickeredList.length - 1].cells.total / 100)
      decoratedObjectArray[index].depth = percentage
    })

    orders[key] = { title: key, sortBy: payloadLists[key].sortBy, values: decoratedObjectArray }

    //** Set up table headers */
    let headerArray: { [name: string]: string } = {}
    Object.keys(state.lists[Object.keys(state.lists)[0]].prices[key].values![0].cells).forEach((key, index) => {
      headerArray["title" + index] = key
    })
    state.headers = headerArray

  })

  state.orderbooks![id] = { ...state.orderbooks![id], values: orders }

}

export default SetTablesReducer
