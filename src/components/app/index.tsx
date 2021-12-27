import 'components/app/style.css'
import PageMeta from 'components/app/meta-tags'
import { loadConfig } from 'store/features/config'
import { useDispatch } from 'react-redux'
import config from 'config'
import Widget from 'components/widget'
import WsManager from 'services/ws-manager'
import { useTitle } from 'store/features/config'

const App = () => {

  const dispatch = useDispatch()
  dispatch(loadConfig(config))
  WsManager()
  return (
    <div className="App" data-testid="App">
      <PageMeta />
      <h1>{useTitle()}</h1>
      <Widget />
    </div>
  )
}

export default App
