import 'components/app/style.css'
import PageMeta from 'components/app/meta-tags'
import { loadConfig } from 'store/features/config'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'store'
import config from 'config'
import Widget from 'components/widget'
import WsManager from 'services/ws-manager'

const App = () => {

  const dispatch = useDispatch()
  dispatch(loadConfig(config))
  WsManager()

  const title = useSelector((state: RootState) => state.config.title)

  return (
    <div className="App" data-testid="App">
      <PageMeta />
      <h1>{title}</h1>
      <Widget />
    </div>
  )
}

export default App
