import { useSelector } from 'react-redux'
import { RootState } from 'store'
import Table from 'components/table'

const Tables = () => {
  const tables = useSelector((state: RootState) => state.config.tables)
  const listKeys = Object.keys(tables.lists)
  return (
    <>
      <div>{tables.title}</div>
      {
        listKeys.map((key: string) => {
          return (
            <div data-testid={"Table_" + key} key={"Table" + key} >
              <Table  {...tables.lists[key]} />
            </div>
          )
        })
      }
    </>
  )
}

export default Tables