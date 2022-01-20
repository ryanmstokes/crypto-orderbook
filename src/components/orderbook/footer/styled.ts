import styled from 'styled-components'

const StyledFooter = styled('div')`
  display: flex;
  justify-content: center;
  padding: 1rem;
  position: relative;
`

const StyledWSMessage = styled('h5')`
  position: absolute;
  right: 1.3rem;
  top: 0;
  color: red;
`

const StyledButtons = styled('div')`
  display:flex;
  gap: 1rem;
`

export { StyledFooter, StyledWSMessage, StyledButtons }
