
import { Lists } from 'types'

const tables: Lists = {
  title: 'Order Book',
  current: 'XBTC',
  lists: {
    XBTC: {
      title: 'XBTC',
      inc: [0.25, 0.5, 0.75, 1],
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
      title: 'ETH',
      inc: [0.1, 0.2, 0.3, 0.4],
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
