import TypedKeys from 'utils/typed-keys'

const Select = (options: any) => {

  return (
    < select onChange={(e: any) => options.callback(e.target.value)} data-testid="Select" >
      {
        TypedKeys(options.list).map((value: string | number | symbol, index: number) => {
          return <option key={options + index}>{options.list[value]}</option>
        })
      }
    </select >
  )
}

export default Select
