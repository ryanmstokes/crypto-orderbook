import Row from 'components/tables/table/row'
import { Price } from 'types'
import TableHeaders from 'components/tables/table/table-headers'
import { UseTableHeaders } from 'store/features/tables'
import { StyledTable } from 'components/tables/table/styled'
import { UseMobile } from 'store/features/config'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Table({ table, id }: { table: Price, id: number }) {
  const headers = UseTableHeaders()
  let ConstructedRows = []
  // eslint-disable-next-line no-console
  console.log('table', table)
  for (let i = 0, n = table.values!.length; i < n; i += 1) {
    const depth: number | undefined = table.values![i].depth ? table.values![i].depth : 0
    ConstructedRows.push(
      <div key={`table_row_wrap${i}`} data-testid={`table_row${i}`}>
        <Row
          cells={table.values![i].cells}
          key={`table_row${i}`}
          id={id}
          index={i}
          depth={depth}
          direction={id === 0 ? 'reverse' : 'default'}
        />
      </div>,
    )
  }
  if (UseMobile()) {
    if (id === 1) {
      ConstructedRows = [...ConstructedRows].reverse()
    }
  }
  return (
    <StyledTable key={`table${id}`}>
      {/* {table.title} */}
      <TableHeaders headers={headers} id={id} />
      {ConstructedRows}
    </StyledTable>
  )
}

export default Table
