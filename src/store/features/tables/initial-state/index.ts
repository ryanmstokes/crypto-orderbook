
import { Lists } from 'types'

const tables: Lists = {
  loaded: false,
  title: 'Order Book',
  headers: {
    title: "price", title1: "total", title2: "amount"
  },
  url: "wss://www.cryptofacilities.com/ws/v1",
  feed: "book_ui_1",
  lists: {
    XBTC: {
      title: 'XBTC',
      inc: [0.5, 1, 2.5],
      ticker: 1,
      product_ids: "PI_XBTUSD",
      prices: {
        bids: {
          sortBy: "DESC",
          title: "bids",
          values: [{ depth: 20, cells: { price: 1000, amount: 100, total: 100 } }, { depth: 20, cells: { price: 1000, amount: 1001, total: 1101 } }]
        },
        asks: {
          sortBy: "ASC",
          title: "asks",
          values: [{ depth: 20, cells: { price: 1000, amount: 100, total: 100 } }, { depth: 20, cells: { price: 1000, amount: 1001, total: 1101 } }]
        }
      },
    },
    ETH: {
      title: 'ETH',
      inc: [0.05, 0.1, 0.25],
      ticker: 0.5,
      product_ids: "PI_ETHUSD",
      prices: {
        bids: {
          sortBy: "DESC",
          title: "bids",
          values: [{ depth: 20, cells: { price: 1000, amount: 100, total: 100 } }, { depth: 20, cells: { price: 1000, amount: 1001, total: 1101 } }]
        },
        asks: {
          sortBy: "ASC",
          title: "asks",
          values: [{ depth: 20, cells: { price: 1000, amount: 100, total: 100 } }, { depth: 20, cells: { price: 1000, amount: 1001, total: 1101 } }]
        }
      },
    }
  }
}

export default tables
