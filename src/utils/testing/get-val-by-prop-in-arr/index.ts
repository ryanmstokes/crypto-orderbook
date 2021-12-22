const GetValByPropInArr = (target: string, list: { [name: string]: string }[] | HTMLCollectionOf<HTMLMetaElement>, identifier: string, value: string) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].name === target) {
      return list[i].content
    }
  }
  return false
}

export default GetValByPropInArr
