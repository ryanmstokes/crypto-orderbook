import { Lists } from 'types'

const tables: Lists = {
  title: 'Order book',
  current: 'XBTC',
  headers: {
    title: "price",
    title1: "amount",
    title2: "total"
  },
  lists: {
    XBTC: {
      title: "XBTC",
      inc: [0.25, 0.75, 1],
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
      title: "ETH",
      inc: [0.50, 1, 1.5],
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
    }
  }
}

export default tables
