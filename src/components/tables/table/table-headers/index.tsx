import 'components/tables/table/table-headers/styles.css'

const TableHeaders = ({ headers }: { headers: string[] }) => {
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
