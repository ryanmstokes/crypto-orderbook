import Cell from 'components/tables/table/cell'
import 'components/tables/table/row/styles.css'
// import { Values } from 'types'

const Row = ({ values }: any) => {
  return (
    <div className="row">
      {
        values.map((item: any) => <Cell value={item} key={"Cell"} />)
      }
    </div>
  )
}

export default Row
