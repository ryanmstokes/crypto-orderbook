import styled from 'styled-components'
import theme from 'theme'

const StyledOrderbookHeader = styled('div')`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.1rem 0.5rem 0.1rem 1rem;
`
const StyledGrouping = styled('div')`
  display: flex;
  align-self: end;
  margin: 0.2rem;
}
`

const StyledTitle = styled('h4')`
  margin: 0;
  display: flex;
  align-self: center;
  font-size: ${theme.fonts.sizes.lg};
  color: ${theme.colors.text.a}
`

export { StyledOrderbookHeader, StyledGrouping, StyledTitle }
