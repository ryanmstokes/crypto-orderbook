import { useSelector } from 'react-redux'
import { RootState } from 'store'

export const UseTitle = () => {
  const title: string = useSelector((state: RootState) => state.config.title)
  return title
}
