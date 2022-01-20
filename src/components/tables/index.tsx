import Table from 'components/tables/table'
import { StyledTables, StyledTablesInner, StyledTableWrapper } from 'components/tables/styled'
import { UseMobile } from 'store/features/config'

const Tables = ({ current, tables }: { title: string, current: string, tables: any }) => {
  let ConstructedTables = []
  for (var i = 0, n = tables.length; i < n; ++i) {
    ConstructedTables.push(
      <StyledTableWrapper data-testid={"Table_" + i} key={"Table_wrap" + i} >
        <Table table={tables[i]} id={i} key={"Table" + i} />
      </StyledTableWrapper>
    )
  }
  if (UseMobile()) {
    ConstructedTables = [...ConstructedTables].reverse()
  }
  return (
    <StyledTables >
      <StyledTablesInner>
        {ConstructedTables}
      </StyledTablesInner>
    </StyledTables>
  )
}

export default Tables
