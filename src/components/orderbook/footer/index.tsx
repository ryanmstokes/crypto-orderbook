import ToggleProducts from 'components/inputs/toggle-products'
import { StyledFooter, StyledWSMessage, StyledButtons } from 'components/orderbook/footer/styled'
import KillFeed from 'components/inputs/kill-feed'

const OrderbookFooter = ({ id, wsToggle, wsConnection }: { id: string, wsToggle: any, wsConnection: boolean }) => {

  const connectionMessage = !wsConnection ? 'Websocket Disconnected' : null

  return (
    <StyledFooter>
      <StyledButtons>
        <ToggleProducts id={id} />
        <KillFeed id={id} callback={wsToggle} />
      </StyledButtons>
      <StyledWSMessage>
        {connectionMessage}
      </StyledWSMessage>
    </StyledFooter>
  )
}

export default OrderbookFooter
