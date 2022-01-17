import ArrayFromObject from 'utils/array-from-object'

const Select = ({ list, callback }: { list: any, callback: any }) => {
  const listArray = ArrayFromObject(list)
  return (
    <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => callback(e.target.value)} data-testid="Select" >
      {
        listArray.map((value: number, index: number) => {
          return <option key={'list' + index}>{value}</option>
        })
      }
    </select>
  )
}

export default Select
