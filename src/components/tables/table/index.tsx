import Row from 'components/tables/table/row'
import { Price, Values } from 'types'
import TableHeaders from 'components/tables/table/table-headers'

const Table = (list: Price) => {
  return (
    <div key={"tablexyy" + list.title} className={"tablexyy" + list.title}>
      {list.title}
      {
        list.values?.map((values: Values, index: number) => {
          return (
            <>
              {index === 0 ? <TableHeaders /> : null}
              <div key={"table_row_wrap" + index} data-testid={"table_row" + index}>
                <Row {...values} key={"table_row" + index} />
              </div>
            </>
          )
        })
      }
    </div>
  )
}

export default Table
