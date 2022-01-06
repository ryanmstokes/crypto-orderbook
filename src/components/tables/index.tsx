
import Table from 'components/tables/table'
import 'components/tables/style.css'

const Tables = ({ title, current, tables }: any) => {
  return (
    <div className="tables">
      <h2>{title}</h2>
      <h3>{current}</h3>
      <div className="tablesInner">
        {
          tables.map((table: any, index: number) => {
            return (
              <div data-testid={"Table_" + index} key={"Table_wrap" + index} >
                <Table {...table} key={"Table" + index} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Tables
