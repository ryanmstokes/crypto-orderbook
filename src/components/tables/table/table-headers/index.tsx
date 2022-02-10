import { StyledHeaders, StyledHeaderCell } from 'components/tables/table/table-headers/styled'
import { UseMobile } from 'store/features/config'

function TableHeaders({ headers, id }: { headers: string[], id: number }) {
  const direction = id === 0 ? 'reverse' : 'default'
  let visible = true
  const directedHeaders = direction === 'reverse' && !UseMobile()
    ? [...headers].reverse()
    : headers
  if (id === 0 && UseMobile()) {
    visible = false
  }
  return (
    <StyledHeaders key="TableHeaders">
      {
        visible ? directedHeaders.map((title: string, index: number) => (
          <StyledHeaderCell key={`table_header${index}`}>
            {title}
          </StyledHeaderCell>
        )) : null
      }
    </StyledHeaders>
  )
}

export default TableHeaders
