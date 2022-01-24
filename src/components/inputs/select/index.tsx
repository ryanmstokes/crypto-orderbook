import ArrayFromObject from 'utils/array-from-object'
interface Callback { (size: number): void }

const Select = ({ list, callback }: { list: number[], callback: Callback }) => {
  const listArray = ArrayFromObject(list)
  return (
    <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => callback(Number(e.target.value))} data-testid="Select" >
      {
        listArray.map((value: number, index: number) => {
          return <option key={'list' + index}>{value}</option>
        })
      }
    </select>
  )
}

export default Select
