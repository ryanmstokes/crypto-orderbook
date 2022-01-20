import { useSelector } from 'react-redux'
import { RootState } from 'store'

export const UseTitle = () => {
  return useSelector((state: RootState) => state.config.title)
}

export const UseMobile = (): boolean => {
  return useSelector((state: RootState) => state.config.mobile!)
}
