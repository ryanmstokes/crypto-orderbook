import 'components/app/style.css'
import PageMeta from 'components/meta-tags'
import { loadConfig } from 'store/features/config'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'store'
import config from 'config'

const App = () => {

  const dispatch = useDispatch()
  dispatch(loadConfig(config))

  const title = useSelector((state: RootState) => state.config.title)

  return (
    <div className="App" data-testid="App">
      <PageMeta />
      <h1>{title}</h1>
    </div>
  )
}

export default App
