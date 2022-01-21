/** TABLES */

type Values = {
  depth?: number,
  cells: {
    amount: number,
    price: number,
    total: number
  }
}

type Price = {
  title: string,
  sortBy: string,
  values?: Values[]
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
  prices?: Prices
}

interface Orderbooks {
  [name: string]:
  {
    title: string,
    inc: number[],
    products: string[],
    current: string,
    values?: any,
    headers?: { [name: string]: string },
    compiled?: any,
    ticker?: number,
    wsInstance?: any,
  }
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
  orderbooks?: Orderbooks
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
  orderbooks: {
    [name: string]: {
      title: string,
      products: string[],
      current: string,
      values?: Values[],
      headers?: {
        [name: string]: string
      }
    }
  },
  mobile?: boolean
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
