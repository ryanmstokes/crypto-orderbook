import { StyledOrderbookHeader, StyledGrouping, StyledTitle } from 'components/orderbook/header/styled'
import GroupingSelect from 'components/inputs/grouping-select'

const OrderbookHeader = ({ id, title }: any) => {
  return (
    <StyledOrderbookHeader>
      <StyledTitle>{title}</StyledTitle>
      <StyledGrouping>
        <GroupingSelect id={id} />
      </StyledGrouping>
    </StyledOrderbookHeader>
  )
}

export default OrderbookHeader