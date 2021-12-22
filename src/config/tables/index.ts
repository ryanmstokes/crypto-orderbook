import { Lists } from 'types'

const tables: Lists = {
  title: 'Order book',
  current: 'XBTC',
  lists: {
    XBTC: {
      title: "XBTC",
      inc: [0.25, 0.75, 1],
      prices: {
        bids: {
          values: [{ price: 0, amount: 2 }, { price: 1, amount: 2 }]
        },
        asks: {
          values: [{ price: 0, amount: 2 }, { price: 1, amount: 2 }]
        }
      }
    },
    ETH: {
      title: "ETH",
      inc: [0.50, 1, 1.5],
      prices: {
        bids: {
          values: [{ price: 0, amount: 2 }, { price: 1, amount: 2 }]
        },
        asks: {
          values: [{ price: 0, amount: 2 }, { price: 1, amount: 2 }]
        }
      }
    }
  }
}

export default tables
