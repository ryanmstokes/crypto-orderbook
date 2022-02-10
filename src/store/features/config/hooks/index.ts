import { useSelector } from 'react-redux'
import { RootState } from 'store'

export const UseTitle = () => useSelector((state: RootState) => state.config.title)

export const UseMobile = (): boolean => useSelector((state: RootState) => state.config.mobile!)
