/** TABLES */

type Values = { amount: number, price: number, total: number }

type Price = {
  title: string,
  sortBy: string,
  values?: Values[]
}

interface PricePayload {
  payload: Price[]
}

type Prices = {
  [name: string]: Price
}

interface PricesPayload {
  payload: Prices
}

type List = {
  title: string,
  inc: number[],
  ticker: number,
  product_ids: string,
  prices: Prices,
  compiled?: Prices,
  sorted?: Prices
}

interface ListPayload {
  payload: List
}

type Lists = {
  loaded: boolean,
  title: string,
  headers: { [name: string]: string },
  url: string,
  feed: string,
  lists: {
    [name: string]: List
  },
  orderbooks?: { [name: string]: { title: string, inc: any, products: string[], current: string, values?: any, headers?: any, compiled?: any, ticker?: number, wsInstance?: any } }
}

type Compiled = {
  sortBy: string,
  list: number[][],
}

interface ListsPayload {
  payload: {
    [name: string]: Compiled
  }
}

type Tables = {
  tables: Lists
}

/** CONFIG */

interface Config {
  title: string,
  author: string,
  description: string,
  tables?: Lists | undefined,
  orderbooks: { [name: string]: { title: string, products: string[], current: string, values?: any, headers?: any } }
}

interface ConfigPayload {
  payload: Config
}

export type {
  Config,
  ConfigPayload,
  Tables,
  Lists,
  ListsPayload,
  List,
  ListPayload,
  Prices,
  PricesPayload,
  Price,
  Values
}
