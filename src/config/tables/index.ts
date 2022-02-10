import { Lists } from 'types'

const tables: Lists = {
  loaded: false,
  title: 'Order book',
  headers: {
    title: 'price',
    title1: 'amount',
    title2: 'total',
  },
  url: 'wss://www.cryptofacilities.com/ws/v1',
  feed: 'book_ui_1',
  lists: {
    BTC: {
      title: 'BTC',
      inc: [0.50, 1, 2.5],
      ticker: 0.5,
      product_ids: 'PI_XBTUSD',
    },
    ETH: {
      title: 'ETH',
      inc: [0.05, 0.1, 0.25],
      ticker: 0.05,
      product_ids: 'PI_ETHUSD',
    },
  },
}

export default tables
