import { Lists } from 'types'

const tables: Lists = {
  loaded: false,
  title: 'Order book',
  headers: {
    title: "price",
    title1: "amount",
    title2: "total"
  },
  url: "wss://www.cryptofacilities.com/ws/v1",
  feed: "book_ui_1",
  lists: {
    XBTC: {
      title: "XBTC",
      inc: [0.50, 1, 2.5],
      ticker: 0.5,
      product_ids: "PI_XBTUSD",
      prices: {
        bids: {
          sortBy: "DESC",
          title: "bids",
        },
        asks: {
          sortBy: "ASC",
          title: "asks",
        }
      }
    },
    ETH: {
      title: "ETH",
      inc: [0.05, 0.1, 0.25],
      ticker: 0.05,
      product_ids: "PI_ETHUSD",
      prices: {
        bids: {
          sortBy: "DESC",
          title: "bids",
        },
        asks: {
          sortBy: "ASC",
          title: "asks",
        }
      }
    }
  }
}

export default tables
