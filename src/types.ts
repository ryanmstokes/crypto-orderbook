/** TABLES */

type Cells = {
  amount: number,
  price: number,
  total: number
}

type Values = {
  depth?: number,
  cells: Cells
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
    inc?: number[],
    products: string[],
    current: string,
    values?: Values[],
    headers?: { [name: string]: string },
    compiled?: { asks: Price, bids: Price },
    ticker?: number,
    // What is this type? WsInstance typeof WebSocket?
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    wsInstance?: any,
  }
}

interface ConfigOrderbooks {
  [name: string]: {
    title: string,
    products: string[],
    current: string,
    values?: Values[],
    headers?: {
      [name: string]: string
    }
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

interface Theme {
  colors: {
    a: string,
    b: string,
    background: {
      a: string,
      b: string,
      c: string,
      d: string
    },
    text: {
      a: string,
      b: string,
      c: string,
      d: string
    },
    [name: string]: string | {
      [name: string]: string
    }
  },
  fonts: {
    sizes: {
      xs: string,
      sm: string,
      lg: string,
      xl: string
    }
  },
  [name: string]: string | {
    [name: string]: string |
    {
      [name: string]: string
    }
  }
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
  Values,
  Cells,
  ConfigOrderbooks,
  Theme,
}
