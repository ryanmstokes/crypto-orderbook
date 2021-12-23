import 'components/tables/table/cell/styles.css'

const Cell = ({ value }: { value: number }) =>
  <div data-testid="Cell" className="cell"> {value}</div >

export default Cell
