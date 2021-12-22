import { useSelector } from 'react-redux'
import { RootState } from 'store'
import MetaTags from 'react-meta-tags'

const PageMeta = () => {
  const config = useSelector((state: RootState) => state.config)
  return (
    <MetaTags>
      <title>{config.title} </title>
      <meta name="description" content={config.description} />
    </MetaTags>
  )
}

export default PageMeta
