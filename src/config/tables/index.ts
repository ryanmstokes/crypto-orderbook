import { Lists } from 'types'

const tables: Lists = {
  title: 'Order book',
  lists: {
    XBTC: {
      title: "XBTC",
      inc: [0.25, 0.75, 1]
    },
    ETH: {
      title: "ETH",
      inc: [0.50, 1, 1.5]
    }
  }
}

export default tables
