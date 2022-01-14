import Row from 'components/tables/table/row'
// import { Price, Values } from 'types'
import TableHeaders from 'components/tables/table/table-headers'
import 'components/tables/table/styles.css'
import { UseTableHeaders } from 'store/features/tables'
import ArrayFromObject from 'utils/array-from-object'

const Table = ({ table, id }: { table: any, id: number }/*Price*/) => {
  let headers = UseTableHeaders()
  return (
    <div key={"table" + id} className="table">
      {table.title}
      {
        table.values?.map((values: any, index: number) => {
          return (
            <>
              {
                index === 0 ? <TableHeaders headers={id === 0 ? headers.reverse() : headers} /> : null
              }
              <div key={"table_row_wrap" + index} data-testid={"table_row" + index}>
                <Row values={id === 0 ? ArrayFromObject(values).reverse() : ArrayFromObject(values)} key={"table_row" + index} />
              </div>
            </>
          )
        })
      }
    </div>
  )
}

export default Table
