import Row from 'components/tables/table/row'
import { Price, Values } from 'types'

const Table = (list: Price) => {
  return (
    <div>
      Price Amount
      {
        list.values.map((values: Values, index: number) => {
          return (
            <div key={"table_row_wrap" + index} data-testid={"table_row" + index}>
              <Row {...values} key={"table_row" + index} />
            </div>
          )
        })
      }
    </div>
  )
}

export default Table
