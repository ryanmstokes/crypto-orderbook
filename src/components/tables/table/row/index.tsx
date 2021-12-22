import Cell from 'components/tables/table/cell'
import 'components/tables/table/row/styles.css'
import { Values } from 'types'
import typedKeys from 'utils/typed-keys'

const Row = (values: Values) => {
  return (
    <div className="row">
      {
        typedKeys(values).map((key, index) => {
          return (<Cell value={values[key]} key={"Cell" + index} />)
        })
      }
    </div>
  )
}

export default Row
