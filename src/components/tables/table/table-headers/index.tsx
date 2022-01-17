import 'components/tables/table/table-headers/styles.css'

const TableHeaders = ({ headers, direction }: { headers: string[], direction: string }) => {
  let directedHeaders = direction === 'reverse' ? [...headers].reverse() : headers
  return (
    <div className="headers" key="TableHeaders">
      {
        directedHeaders.map((title: string, index: number) => {
          return (
            <div className="headerCell" key={'table_header' + index}>
              {title}
            </div>
          )
        })
      }
    </div>
  )
}

export default TableHeaders
