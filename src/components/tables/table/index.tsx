import Row from 'components/tables/table/row'
// import { Price, Values } from 'types'
import TableHeaders from 'components/tables/table/table-headers'
import 'components/tables/table/styles.css'
import { UseTableHeaders } from 'store/features/tables'

const Table = ({ table, id }: { table: any, id: number }/*Price*/) => {
  let headers = UseTableHeaders()
  return (
    <div key={"table" + id} className="table">
      {table.title}
      <TableHeaders headers={headers} direction={id === 0 ? 'reverse' : 'default'} />
      {
        table.values?.map((values: any, index: number) => {
          return (
            <div key={"table_row_wrap" + index} data-testid={"table_row" + index}>
              <Row
                cells={values.cells}
                key={"table_row" + index}
                id={id + index}
                depth={values.depth}
                direction={id === 0 ? 'reverse' : 'default'}
              />
            </div>
          )
        })
      }
    </div>
  )
}

export default Table
