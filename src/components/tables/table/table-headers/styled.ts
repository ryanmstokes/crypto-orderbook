import styled from 'styled-components'
import theme from 'theme'

const StyledHeaders = styled('div')`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${theme.colors.text.d};
  border-top: 1px solid ${theme.colors.text.d};
  padding: 0.2rem 0;
`

const StyledHeaderCell = styled('div')`
  font-size: ${theme.fonts.sizes.sm};
  color: ${theme.colors.text.d};
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 30.333%;
  font-weight: 800;
  padding: 0.1rem 0 0.1rem 3.5rem;
  text-transform: uppercase;
`

export { StyledHeaders, StyledHeaderCell }
