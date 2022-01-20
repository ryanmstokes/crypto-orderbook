import styled from 'styled-components'
import theme from 'theme'

const StyledOrderbook = styled('div')`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 60rem;
  width: 100%;
  background: ${theme.colors.background.a};
  color: white;
  margin-bottom: 4rem;
    @media (max-width: 810px) {
    max-width: 24rem;
    display: flex
  }
`

const StyledOrderbookContent = styled('div')`
display: flex;
    flex-direction: column;
`

export { StyledOrderbook, StyledOrderbookContent }
