import { StyledHeaders, StyledHeaderCell } from 'components/tables/table/table-headers/styled'
import { UseMobile } from 'store/features/config'

const TableHeaders = ({ headers, id }: { headers: string[], id: number }) => {
  const direction = id === 0 ? 'reverse' : 'default'
  let visible: boolean = true
  const directedHeaders = direction === 'reverse' && !UseMobile()
    ? [...headers].reverse()
    : headers
  if (id === 0 && UseMobile()) {
    visible = false
  }
  return (
    <StyledHeaders key="TableHeaders">
      {
        visible ? directedHeaders.map((title: string, index: number) => {
          return (
            <StyledHeaderCell key={'table_header' + index}>
              {title}
            </StyledHeaderCell>
          )
        }) : null
      }
    </StyledHeaders>
  )
}

export default TableHeaders
