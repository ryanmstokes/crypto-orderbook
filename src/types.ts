interface List {
  title: string,
  variants: { title: string, inc: number[] }[]
}

interface ConfigState {
  title: string,
  author: string,
  description: string,
  list: List
}

interface ConfigStatePayload {
  payload: ConfigState
}

export type { List, ConfigState, ConfigStatePayload }
