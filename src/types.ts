/** TABLES */

type Values = { amount: number, price: number, total: number }

type Price = {
  title: string,
  values: Values[]
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
  prices: Prices
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

interface ListsPayload {
  payload: {
    [name: string]: number[][]
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
