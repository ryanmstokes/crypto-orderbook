import { useSelector } from 'react-redux'
import { RootState } from 'store'

export const useTitle = () => {
  const title: string = useSelector((state: RootState) => state.config.title)
  return title
}
