import { StyledCell } from 'components/tables/table/cell/styled'

function Cell({ value, color }: { value: number, color: string }) {
  return <StyledCell data-testid="Cell" color={color}>{value.toLocaleString()}</StyledCell>
}

export default Cell
