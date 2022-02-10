import Table from 'components/tables/table'
import { StyledTables, StyledTablesInner, StyledTableWrapper } from 'components/tables/styled'
import { UseMobile } from 'store/features/config'
import { Price } from 'types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Tables({ tables }: { tables: Price[] }) {
  // eslint-disable-next-line no-console
  console.log('tables', tables)
  let ConstructedTables = []
  for (let i = 0, n = tables.length; i < n; i += 1) {
    // eslint-disable-next-line no-console
    console.log('tablex', tables[i])
    ConstructedTables.push(
      <StyledTableWrapper data-testid={`Table_${i}`} key={`Table_wrap${i}`}>
        <Table table={tables[i]} id={i} key={`Table${i}`} />
      </StyledTableWrapper>,
    )
  }
  if (UseMobile()) {
    ConstructedTables = [...ConstructedTables].reverse()
  }
  return (
    <StyledTables>
      <StyledTablesInner>
        {ConstructedTables}
      </StyledTablesInner>
    </StyledTables>
  )
}

export default Tables
