import Row from 'components/tables/table/row'
// import { Price, Values } from 'types'
import TableHeaders from 'components/tables/table/table-headers'
import { UseTableHeaders } from 'store/features/tables'
import { StyledTable } from 'components/tables/table/styled'
import { UseMobile } from 'store/features/config'

const Table = ({ table, id }: { table: any, id: number }) => {
  const headers = UseTableHeaders()
  let ConstructedRows = []

  for (var i = 0, n = table.values.length; i < n; ++i) {
    ConstructedRows.push(
      <div key={"table_row_wrap" + i} data-testid={"table_row" + i}>
        <Row
          cells={table.values[i].cells}
          key={"table_row" + i}
          id={id}
          index={i}
          depth={table.values[i].depth}
          direction={id === 0 ? 'reverse' : 'default'}
        />
      </div>
    )
  }
  if (UseMobile()) {
    if (id === 1) {
      ConstructedRows = [...ConstructedRows].reverse()
    }
  }
  return (
    <StyledTable key={"table" + id} >
      {/* {table.title} */}
      <TableHeaders headers={headers} id={id} />
      {ConstructedRows}
    </StyledTable>
  )
}

export default Table
