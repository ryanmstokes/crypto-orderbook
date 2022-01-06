/** TABLES */

type Values = { amount: number, price: number, total: number }

type Price = {
  title: string,
  sortBy: string,
  values: Values[]
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
  prices: Prices,
  compiled?: Prices,
  sorted?: Prices
}

interface ListPayload {
  payload: List
}

type Lists = {
  title: string,
  current: string,
  headers: { [name: string]: string },
  lists: {
    [name: string]: List
  }
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
  tables: Lists
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
