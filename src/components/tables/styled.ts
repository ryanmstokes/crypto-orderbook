import styled from 'styled-components'

const StyledTables = styled('div')`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
 
`

const StyledTablesInner = styled('div')`
  justify-content: center;
  display: flex;
  @media (max-width: 810px) {
    flex-direction: column;
  }
`
const StyledTableWrapper = styled('div')`
  width:100%; 
`

export { StyledTables, StyledTablesInner, StyledTableWrapper }
