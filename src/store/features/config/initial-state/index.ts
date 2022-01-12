import { Config } from 'types'
import tables from 'store/features/tables/initial-state'

const config: Config = {
  title: 'Config Title',
  description: 'App description goes here',
  author: 'Unknow dev',
  tables: tables,
  orderbooks: {
    btc_eth: {
      title: 'btc_eth',
      products: ['XBTC', 'ETH'],
      current: 'XBTC'
    }
  }
}
export default config
