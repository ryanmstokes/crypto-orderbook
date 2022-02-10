import styled from 'styled-components'
import theme from 'theme'

const StyledCell = styled('div') <{ color: string }>`
  display: flex;
  flex-grow: 1;          
  -webkit-flex-grow: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 20%;
  font-size: 0.8rem;
  font-weight: 500;
  padding: 0.3rem 0 0.3rem 3.5rem;
  z-index: 2;
  color: ${(props) => {
    let color = 'white'
    if (props.color === 'primary') {
      color = theme.colors.text.b
    }
    if (props.color === 'secondary') {
      color = theme.colors.text.c
    }
    return color
  }}
`

export { StyledCell }
