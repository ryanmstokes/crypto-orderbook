import TypedKeys from 'utils/typed-keys'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ArrayFromObject = (values: any) => TypedKeys(values).map((key) => values[key])

export default ArrayFromObject
