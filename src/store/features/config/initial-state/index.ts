import { ConfigState } from 'types'

const initialState: ConfigState = {
  title: 'Config Title',
  description: 'App description goes here',
  author: 'Unknow dev',
  list: {
    title: 'List title',
    variants: [
      {
        title: "Item Title",
        inc: [0, 1, 2]
      },
      {
        title: "Item Title 2",
        inc: [0, 0.5, 0.75]
      }
    ]
  }
}
export default initialState
