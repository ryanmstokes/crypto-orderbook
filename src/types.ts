/** TABLES */

type List = {
  title: string,
  inc: number[],
  prices?: number[]
}

type Lists = {
  title: string,
  lists: {
    [name: string]: List
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

export type { Config, ConfigPayload, Tables, Lists, List }
