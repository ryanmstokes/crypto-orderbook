import {
  StyledOrderbookHeader, StyledGrouping, StyledTitle, StyledLeft, StyledSymbolPair,
} from 'components/orderbook/header/styled'
import GroupingSelect from 'components/inputs/grouping-select'

function OrderbookHeader({ id, title, symbol }: { id: string, title: string, symbol: string }) {
  const symbolPairTitle = `${symbol.slice(3).slice(0, 3)}/${symbol.slice(3).slice(3)}`
  return (
    <StyledOrderbookHeader>
      <StyledLeft>
        <StyledTitle>{title}</StyledTitle>
        <StyledSymbolPair>
          -
          {symbolPairTitle}
        </StyledSymbolPair>
      </StyledLeft>
      <StyledGrouping>
        <GroupingSelect id={id} />
      </StyledGrouping>
    </StyledOrderbookHeader>
  )
}

export default OrderbookHeader
