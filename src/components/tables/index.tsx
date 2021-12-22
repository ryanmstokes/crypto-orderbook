
import Table from 'components/tables/table'
import { Prices } from 'types'
import 'components/tables/style.css'
import { useSelector } from 'react-redux'
import { RootState } from 'store'

const Tables = () => {
  const title: string = useSelector((state: RootState) => state.lists.title)
  const current: string = useSelector((state: RootState) => state.lists.current)
  const prices: Prices = useSelector((state: RootState) => state.lists.lists[current].prices)

  return (
    <div className="tables">
      <h2>{title}</h2>
      <h3>{current}</h3>
      <div className="tablesWrap">
        {
          Object.keys(prices).map((key: string) => {
            return (
              <div data-testid={"Table_" + key} key={"Table_wrap" + key} >
                {key}
                <Table {...prices[key]} key={"Table" + key} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Tables
