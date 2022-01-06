
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
      inc: [0.5, 1, 2.5],
      ticker: 1,
      prices: {
        bids: {
          sortBy: "DESC",
          title: "bids",
          values: [{ price: 1000, amount: 100, total: 100 }, { price: 1000, amount: 1001, total: 1101 }]
        },
        asks: {
          sortBy: "ASC",
          title: "asks",
          values: [{ price: 1000, amount: 100, total: 100 }, { price: 1000, amount: 1001, total: 1101 }]
        }
      },
    },
    ETH: {
      title: 'ETH',
      inc: [0.05, 0.1, 0.25],
      ticker: 0.5,
      prices: {
        bids: {
          sortBy: "DESC",
          title: "bids",
          values: [{ price: 1000, amount: 100, total: 100 }, { price: 1000, amount: 1001, total: 1101 }]
        },
        asks: {
          sortBy: "ASC",
          title: "asks",
          values: [{ price: 1000, amount: 100, total: 100 }, { price: 1000, amount: 1001, total: 1101 }]
        }
      },
    }
  }
}

export default tables
