import tables from 'config/tables'
import { Config } from 'types'

const config: Config = {
  title: 'Cryptobook',
  description: 'A crypto orderbook application built with Typescript, React, Redux, Websockets, and React Testing Library.',
  author: 'Ryan Stokes',
  tables,
  orderbooks: {
    btc_eth: {
      title: 'Orderbook 1',
      products: ['BTC', 'ETH'],
      current: 'BTC'
    },
    eth_btc: {
      title: 'Orderbook 1',
      products: ['ETH', 'BTC'],
      current: 'ETH',
    }
  }
}

export default config
