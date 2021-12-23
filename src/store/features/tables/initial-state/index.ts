
import { Lists } from 'types'

const tables: Lists = {
  title: 'Order Book',
  current: 'XBTC',
  headers: {
    title: "price", title1: "total", title2: "amount"
  },
  lists: {
    XBTC: {
      title: 'XBTC',
      inc: [0.25, 0.5, 0.75, 1],
      prices: {
        bids: {
          title: "bids",
          values: [{ price: 0, amount: 2, total: 2 }, { price: 1, amount: 2, total: 2 }]
        },
        asks: {
          title: "asks",
          values: [{ price: 0, amount: 2, total: 2 }, { price: 1, amount: 2, total: 2 }]
        }
      }
    },
    ETH: {
      title: 'ETH',
      inc: [0.1, 0.2, 0.3, 0.4],
      prices: {
        bids: {
          title: "bids",
          values: [{ price: 0, amount: 2, total: 2 }, { price: 1, amount: 2, total: 2 }]
        },
        asks: {
          title: "bids",
          values: [{ price: 0, amount: 2, total: 2 }, { price: 1, amount: 2, total: 2 }]
        }
      }
    }
  }
}

export default tables
