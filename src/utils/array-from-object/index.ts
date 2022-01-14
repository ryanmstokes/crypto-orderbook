const ArrayFromObject = (values: any) => Object.keys(values).map((key: any): any => values[key])

export default ArrayFromObject

