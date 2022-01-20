import styled from 'styled-components'
import theme from 'theme'

const StyledButton = styled('button') <{ variant: string }>`
padding: 0.3rem 1rem;
cursor: pointer;
background: ${(props) => theme.colors[props.variant]};
color: ${theme.colors.text.a};
font-weight: 800;
border: none;
border-radius: 0.2rem;
opacity: 1;
font-size: ${theme.fonts.sizes.lg};
:hover{
  opacity: 0.8;
}
`

export { StyledButton }
