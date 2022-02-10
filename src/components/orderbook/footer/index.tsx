import ToggleProducts from 'components/inputs/toggle-products'
import { StyledFooter, StyledWSMessage, StyledButtons } from 'components/orderbook/footer/styled'
import KillFeed from 'components/inputs/kill-feed'
import { MouseEventHandler } from 'react'

function OrderbookFooter(
  { id, wsToggle, wsConnection }
    : { id: string, wsToggle: MouseEventHandler<HTMLButtonElement>, wsConnection: boolean }
) {
  const connectionMessage = !wsConnection ? 'Websocket Disconnected' : null

  return (
    <StyledFooter>
      <StyledButtons>
        <ToggleProducts id={id} />
        <KillFeed callback={wsToggle} />
      </StyledButtons>
      <StyledWSMessage>
        {connectionMessage}
      </StyledWSMessage>
    </StyledFooter>
  )
}

export default OrderbookFooter
