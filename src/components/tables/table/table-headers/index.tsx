import 'components/tables/table/table-headers/styles.css'
import { UseTableHeaders } from 'store/features/tables'

const TableHeaders = () => {
  const headers = UseTableHeaders()
  return (
    <div className="headers" key="TablHeaders">
      {
        headers.map((title: string, index: number) => {
          return <div className="headerCell" key={'table_header' + index}>{title}</div>
        })
      }
    </div>
  )
}

export default TableHeaders
