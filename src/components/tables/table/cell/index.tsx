import { StyledCell } from 'components/tables/table/cell/styled'

const Cell = ({ value, color }: { value: number, color: string }) =>
  <StyledCell data-testid="Cell" color={color}>{value.toLocaleString()}</StyledCell >

export default Cell
