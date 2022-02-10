import styled from 'styled-components'
import theme from 'theme'

const StyledGroupOptions = styled('div')`
background: ${theme.colors.background.d};
padding: 0.2rem 0.4rem 0.1rem 0.4rem;
border-radius: 0.2rem;
font-size: ${theme.fonts.sizes.xs};
select{
  border: none;
  cursor: pointer;
  background: none;
  color: white;
}
`

export { StyledGroupOptions }
