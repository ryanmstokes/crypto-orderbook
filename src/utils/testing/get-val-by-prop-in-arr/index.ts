const GetValByPropInArr = (
  target: string,
  list: { [name: string]: string }[] | HTMLCollectionOf<HTMLMetaElement>
) => {
  for (let i = 0; i < list.length; i += 1) {
    if (list[i].name === target) {
      return list[i].content
    }
  }
  return false
}

export default GetValByPropInArr
