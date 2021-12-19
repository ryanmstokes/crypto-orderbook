import Row from 'components/table/row'
import { List } from 'types'

const Table = (list: List) => {
  return (
    <div data-testid={list.title}>
      <div>Table x</div>
      <div >
        <Row />
      </div>
    </div>
  )
}

export default Table
