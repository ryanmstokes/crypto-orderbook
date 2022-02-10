const deepClone = (object: unknown) => JSON.parse(JSON.stringify(object))

export default deepClone
